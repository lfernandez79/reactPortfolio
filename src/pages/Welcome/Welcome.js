import React from "react";
import "./Welcome.css";

function Welcome() {
  return (

    <div>
    <div className="container">
      <div className="row">
        <div style={{ background: "none" }} className="col jumbotron mt-5">
          <h1 className="display-1 text-center">
            Hello!
            <br />
            My name is
            <br />
            Leo
            <br />
            <span>Full Stack, Frontend Web Developer</span>
          </h1>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Welcome;
