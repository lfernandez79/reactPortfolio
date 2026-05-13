import React from "react";
import { owner } from "../../data/portfolio";
import { images } from "../../data/images";
import "./About.css";

function About() {
  return (
    <div style={{ background: "none" }}>
      <section id="About" className="container mt-5 border-0">
        <hr />
        <main className="my-3">
          <div className="row pt-2 px-3">
            <div className="col-md-6 col-lg-4">
              <img
                id="grayscale"
                className="img-fluid d-flex align-items-md-stretch"
                src={images.portrait}
                alt={owner.name}
              />
            </div>
            <div className="col-md-6 col-lg-8 intro">
              {owner.bio.map((paragraph, i) => (
                <p key={i} className="mt-3">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </main>
        <br />
      </section>
    </div>
  );
}

export default About;
