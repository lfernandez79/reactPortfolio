import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../../data/portfolio";
import { images } from "../../data/images";
import "./Projects.css";

const directionMap = {
  "fade-up": { opacity: 0, y: 40 },
  "fade-down": { opacity: 0, y: -40 },
  "fade-right": { opacity: 0, x: -40 },
};

function ProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hidden = directionMap[project.animation] || { opacity: 0, y: 40 };

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={hidden}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : hidden}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img className="project-image" src={images[project.image]} alt={project.title} />
      <div className="overlay">
        <p className="text1">{project.title}</p>
        <p className="text2">{project.description}</p>
        <p className="text3">
          <a href={project.url}>Deployed</a>
        </p>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <h3 className="projects-heading">Projects</h3>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
