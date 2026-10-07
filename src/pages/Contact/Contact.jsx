import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { owner } from "../../data/portfolio";
import NetlifyForm from "./NetlifyForms";
import "./Contact.css";

function Contact() {
  return (
    <section id="Contact">
      <div className="contact-card">
        <h3 className="contact-heading">Get In Touch</h3>
        <p className="contact-text">
          Let&apos;s create something awesome together — I would love to hear about your project.
        </p>
        <a
          className="contact-text"
          href={`mailto:${owner.email}?subject=Hello%20I%20saw%20your%20portfolio%20and...`}
        >
          This is my email <strong>{owner.email}</strong>, please contact me!
        </a>

        <NetlifyForm />

        <div className="contact-social">
          <a href={owner.linkedin} target="_blank" rel="noreferrer" aria-label="Leo Fernandez on LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href={owner.github} target="_blank" rel="noreferrer" aria-label="Leo Fernandez on GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
