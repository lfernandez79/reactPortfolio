import React from "react";
import { Link } from "react-scroll";
import "./style.css";

function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-list">
          <li>
            <Link to="About" duration={500} smooth className="nav-link" href="/">
              About
            </Link>
          </li>
          <li>
            <Link to="Projects" duration={500} smooth className="nav-link" href="/">
              Portfolio
            </Link>
          </li>
          <li>
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
