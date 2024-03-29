import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";

// eslint-disable-next-line no-undef
it("renders without crashing or errors", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<App />);
  root.unmount(div);
});
