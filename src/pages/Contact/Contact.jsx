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
        <h5 className="contact-text">
          Lets create something awesome together, I would love to be part of your project, solution.
        </h5>
        <a
          className="contact-text"
          href={`mailto:${owner.email}?subject=Hello%20I%20saw%20your%20portfolio%20and...`}
        >
          This is my email <strong>{owner.email}</strong>, please contact me!
        </a>

        <NetlifyForm />

        <div className="contact-social">
          <a href={owner.linkedin}>
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href={owner.github}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
