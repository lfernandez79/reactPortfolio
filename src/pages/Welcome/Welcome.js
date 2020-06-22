import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="container">
      <hr />
      <div className="row">
        <div style={{ background: "none" }} className="col jumbotron mt-5">
          <h1 className="display-1 text-center">
            Hello!
            <br />
            My name is
            <br />
            Leo
          </h1>
          <h2 className="text-center">
            Full Stack
            {" "}
            <span><b>|</b></span>
            {" "}
            Frontend Web Developer
          </h2>
        </div>
      </div>

    </div>
  );
}
export default Welcome;
