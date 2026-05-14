import React from "react";
import { owner } from "../../data/portfolio";
import "./Welcome.css";

function Welcome() {
  return (
    <section className="hero-section">
      <h1 className="hero-heading">
        Hello!
        <br />
        My name is {owner.name}
        <br />
        <span>{owner.title}</span>
      </h1>
    </section>
  );
}

export default Welcome;
