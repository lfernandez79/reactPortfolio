import "@testing-library/jest-dom";
import { vi } from "vitest";

// jsdom lacks IntersectionObserver (needed by framer-motion useInView)
global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock("vanta/dist/vanta.net.min", () => ({
  default: () => ({ destroy: vi.fn() }),
}));
