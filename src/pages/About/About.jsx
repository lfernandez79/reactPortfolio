import React from "react";
import { Icon } from "@iconify/react";
import { owner } from "../../data/portfolio";
import "./About.css";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "devicon:react" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "HTML5", icon: "devicon:html5" },
      { name: "CSS3", icon: "devicon:css3" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: "devicon:docker" },
      { name: "Kubernetes", icon: "devicon:kubernetes" },
      { name: "Linux", icon: "devicon:linux" },
      { name: "Git", icon: "devicon:git" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", icon: "devicon:vscode" },
      { name: "GitHub", icon: "devicon:github" },
      { name: "Netlify", icon: "devicon:netlify" },
    ],
  },
];

function About() {
  return (
    <section id="About" className="about-section">
      <hr />
      <div className="about-bio">
        {owner.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="skills-section">
        {skills.map((group) => (
          <div key={group.category} className="skills-group">
            <h4 className="skills-category">{group.category}</h4>
            <div className="skills-grid">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-chip">
                  <Icon icon={skill.icon} width="24" height="24" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
