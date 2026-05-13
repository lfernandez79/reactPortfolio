import React from "react";
import { Link } from "react-scroll";
import "./style.css";

function NavBar() {
  return (
    <header className="row align-items-center py-3">
      <nav className="col-sm-12 col-md-6">
        <ul className="nav d-flex justify-content-around">
          <li className="nav-item">
            <Link to="About" duration={500} smooth className="nav-link" href="/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Projects" duration={500} smooth className="nav-link" href="/">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Contact" duration={500} smooth className="nav-link" href="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
