import React from "react";
import { projects } from "../../data/portfolio";
import { images } from "../../data/images";
import "./Projects.css";

function Projects() {
  return (
    <div id="Projects" className="container">
      <hr />
      <h3 className="text-center">Hover each project for details!</h3>

      <article id="view" className="my-3">
        <main>
          <div className="row d-flex justify-content-around my-5">
            {projects.map((project) => (
              <div
                key={project.id}
                data-aos={project.animation}
                className="zoomOut col-xs-12 col-md-5 p-0 m-1"
              >
                <img
                  className="d-flex img-fluid"
                  src={images[project.image]}
                  alt={project.title}
                />
                <div className="overlay">
                  <p className="text1">{project.title}</p>
                  <p className="text2">{project.description}</p>
                  <p className="text3">
                    <a href={project.url}>Deployed</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </article>
    </div>
  );
}

export default Projects;
