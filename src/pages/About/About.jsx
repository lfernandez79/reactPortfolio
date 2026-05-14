import React from "react";
import { owner } from "../../data/portfolio";
import { images } from "../../data/images";
import "./About.css";

function About() {
  return (
    <section id="About" className="about-section">
      <hr />
      <div className="about-layout">
        <div className="about-portrait-col">
          <img className="about-portrait" src={images.portrait} alt={owner.name} />
        </div>
        <div className="about-bio">
          {owner.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
