import React from "react";
import { Icon } from "@iconify/react";
import "./style.css";

function Footer() {
  return (
    <footer id="copyright">
      <h6 className="py-2">
        &copy;Copyright {new Date().getFullYear()} by me!{" "}
        <Icon icon="logos:netlify" width={30} />
      </h6>
    </footer>
  );
}

export default Footer;
