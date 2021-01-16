import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="copyright">
      <h6 className="py-2">
        &copy;Copyright 2021 by me!
        {" "}
        <span className="iconify" data-icon="logos-netlify" data-inline="false" style={{ fontSize: "30px" }} />
      </h6>
    </footer>
  );
}
export default Footer;
