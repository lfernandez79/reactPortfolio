import React from "react";
import { Wave } from "react-animated-text";
import { Link } from "react-scroll";
import "./style.css";


function NavBar() {
  return (
    <header className="row">

      <div className="col-sm-12 col-md-6 py-2">
        <h1><i className="fas fa-laptop-code d-flex justify-content-around pt-3"></i></h1>
      </div>

      <nav className="col-sm-12 col-md-6 py-3">
        <ul className="nav d-flex justify-content-around align-items-center">
          <li className="nav-item">
            <Link to="About" duration={500} smooth={true} className="nav-link" href="/"><Wave text="A b o u t" effect={"stretch"} effectChange={2.0} /></Link>
          </li>
          <li className="nav-item">
            <Link to="Projtcs" duration={500} smooth={true} className="nav-link" href="/"><Wave text="P o r t f o l i o" effect="stretch" effectChange={2.0} /></Link>
          </li>
          <li className="nav-item">
            <Link to="Contact" duration={500} smooth={true} className="nav-link" href="/"><Wave text="C o n t a c t" effect="stretch" effectChange={2.0} /></Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default NavBar;
