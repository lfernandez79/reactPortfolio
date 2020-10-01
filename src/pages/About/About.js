/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from "react";
import "./About.css";
import PorImg from "../images/Leo.jpg";

function About() {
  return (
    <div style={{ background: "none" }}>

      <section id="About" className="container mt-5 border-0">
        <hr />
        <main className="my-3">
          <div className="row pt-2 px-3">
            <div className="col-md-6 col-lg-4">
              <img id="grayscale" className="img-fluid d-flex align-items-md-stretch" src={PorImg} alt="LeoFernandez" />
            </div>

            <div className="col-md-6 col-lg-8 intro">
              <p className="mt-3">
                I'm a full stack developer
                I'm based in Dallas, TX. Beside coding, I enjoy spending time with my two girls. I love coffee,
                can't live without it. I also enjoy cooking, very relaxing if you ask me.
              </p>

              <p>
                My skill range from HTML, CSS, Bootstrap, jQuery, Javascript, MySQL, MongoDB to ReactJS
                also recently added CI/CD pipeline and Jest for testing.
              </p>
              <p>
                I love to be part of the process where you are putting
                pieces together like a lego puzzle, then add any functionality that you can think of, coding is
                unlimited!
              </p>
            </div>
          </div>
        </main>
        <br />
      </section>
    </div>
  );
}
export default About;
