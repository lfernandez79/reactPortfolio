// Production-bundle smoke test: build (assumed already run), serve via
// `vite preview`, drive in a real headless browser, fail on any page
// error / failed request / console error. Catches dev/build interop
// divergence that the Vitest jsdom suite cannot see.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import puppeteer from "puppeteer-core";

const PORT = 4173;
const URL = `http://127.0.0.1:${PORT}/`;
const STARTUP_TIMEOUT_MS = 30000;
const NAV_TIMEOUT_MS = 15000;

const CHROME_CANDIDATES = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
  "/opt/google/chrome/google-chrome",
].filter(Boolean);

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error(
    "Chrome/Chromium not found. Tried:\n  " +
      CHROME_CANDIDATES.join("\n  ") +
      "\nSet PUPPETEER_EXECUTABLE_PATH to override."
  );
  process.exit(1);
}

const preview = spawn(
  "npx",
  ["vite", "preview", "--port", String(PORT), "--host", "127.0.0.1"],
  { stdio: ["ignore", "pipe", "pipe"] }
);
preview.stdout.on("data", (b) => process.stderr.write(`[preview] ${b}`));
preview.stderr.on("data", (b) => process.stderr.write(`[preview] ${b}`));

const stopPreview = () => {
  try {
    preview.kill("SIGTERM");
  } catch {
    /* already gone */
  }
};
process.on("exit", stopPreview);
process.on("SIGINT", () => process.exit(130));

const waitForServer = async () => {
  const deadline = Date.now() + STARTUP_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(URL);
      if (res.ok) return;
    } catch {
      /* not ready yet */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`preview did not respond within ${STARTUP_TIMEOUT_MS}ms`);
};

await waitForServer();

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
const pageErrors = [];
const failedRequests = [];
const consoleErrors = [];

page.on("pageerror", (err) => pageErrors.push(err.message));
page.on("requestfailed", (req) =>
  failedRequests.push(`${req.url()} → ${req.failure()?.errorText}`)
);
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});

await page.goto(URL, { waitUntil: "networkidle0", timeout: NAV_TIMEOUT_MS });
// Let useEffect-driven mounts (Vanta) settle.
await new Promise((r) => setTimeout(r, 1500));

const sanity = await page.evaluate(() => ({
  hasNavBar: !!document.querySelector(".navbar"),
  hasCanvas: !!document.querySelector("canvas"),
  bodyTextLen: document.body.innerText.length,
  title: document.title,
}));

await browser.close();
stopPreview();

const problems = [];
if (pageErrors.length)
  problems.push(`page errors:\n    ${pageErrors.join("\n    ")}`);
if (failedRequests.length)
  problems.push(`failed requests:\n    ${failedRequests.join("\n    ")}`);
if (consoleErrors.length)
  problems.push(`console errors:\n    ${consoleErrors.join("\n    ")}`);
if (!sanity.hasNavBar) problems.push(`expected .navbar in DOM, missing`);
if (!sanity.hasCanvas)
  problems.push(`expected <canvas> (Vanta init) in DOM, missing`);
if (sanity.bodyTextLen < 30)
  problems.push(`body text too short (${sanity.bodyTextLen} chars)`);

if (problems.length) {
  console.error("Smoke check FAILED:");
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log("Smoke check PASSED:", JSON.stringify(sanity));
