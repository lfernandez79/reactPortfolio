import React from "react";
import { projects } from "../../data/portfolio";
import { images } from "../../data/images";
import "./Projects.css";

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <hr />
      <h3 className="projects-heading">Hover each project for details!</h3>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              className="project-image"
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
    </section>
  );
}

export default Projects;
