import React from "react";
import NetlifyForm from "./NetlifyForms";
import "./Contact.css";

function Contact() {
  return (
    <div id="Contact">

      <div className="">
        <div className="row">
          <div className="col-sm-12 col-md-12 card w-75 border-0">
            <div className="card-body">

              <br />
              <h3 className="display-4 card-title">Full Stack Developer</h3>
              <h5 className="card-text">Lets create something awesome together, I would love to be part of your project, solution.</h5>
              <a className="card-text" href="mailto:lfernandez79@gmail.com?subject=Hello%20I%20saw%20your%20portfolio%20and...">
                This is my email
                <strong> lfernandez79@gmail</strong>
                , please contact me!
              </a>

              <NetlifyForm />

              <a className="d-flex flex-row-reverse" href="https://www.linkedin.com/in/joseleonardofernandez/"><i className="fab fa-linkedin-in fa-2x pt-2" /></a>
              <a className="d-flex flex-row-reverse mt-1" href="https://github.com/lfernandez79"><i className="fab fa-github fa-2x pt-2" /></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
