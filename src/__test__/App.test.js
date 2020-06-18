import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

// eslint-disable-next-line no-undef
it("Rendering with no crashes or errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
