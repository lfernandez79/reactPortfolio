import React from "react";
import { Wave } from "react-animated-text";
import { Link } from "react-scroll";
import "./style.css";

function NavBar() {
  return (
    <header className="row align-items-center py-3">
      <nav className="col-sm-12 col-md-6">
        <ul className="nav d-flex justify-content-around">
          <li className="nav-item">
            <Link to="About" duration={500} smooth className="nav-link" href="/">
              <Wave text="About" effect="stretch" effectChange={2.0} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Projects" duration={500} smooth className="nav-link" href="/">
              <Wave text="Portfolio" effect="stretch" effectChange={2.0} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Contact" duration={500} smooth className="nav-link" href="/">
              <Wave text="Contact" effect="stretch" effectChange={2.0} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
