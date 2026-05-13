import React from "react";
import { owner } from "../../data/portfolio";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="container">
      <div className="row">
        <div style={{ background: "none" }} className="col jumbotron mt-5">
          <h1 className="display-3 text-center">
            Hello!
            <br />
            My name is {owner.name}
            <br />
            <span>{owner.title}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
