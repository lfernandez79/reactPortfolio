/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import "./Contact.css";


function Contact() {
  return (
    <div id="Contact">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 card w-75 border-0">
            <div className="card-body">

              <br />
              <h3 className="display-4 card-title">Full Stack Developer</h3>
              <h5 className="card-text">Please contact me to work together, I would love to be part of your project, solution.</h5>
              <a href="mailto:lfernandez79@gmail.com?subject=Hello%20again!">
                This is my email
                <strong>lfernandez79@gmail</strong>
                , please contact me!
              </a>
              <a className="d-flex flex-row-reverse" href="https://www.linkedin.com/in/joseleonardofernandez/"><i className="fab fa-linkedin-in fa-1x pt-2" /></a>
              <a className="d-flex flex-row-reverse mt-1" href="https://github.com/lfernandez79"><i className="fab fa-github fa-1x pt-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
