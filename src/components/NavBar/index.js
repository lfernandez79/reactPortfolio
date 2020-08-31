import React from "react";
import { Wave } from "react-animated-text";
import { Link } from "react-scroll";
import TravisCI from "../../pages/images/TravisCI-Mascot-2.png";
import "./style.css";

const style = {

  removeUnderline: {
    textDecoration: "none",
  },
};

function NavBar() {
  return (
    <header className="row align-items-center py-3">

      <div className="col-sm-12 col-md-6">
        <a className="d-flex justify-content-center" href="https://travis-ci.com/github/lfernandez79/reactPortfolio" style={style.removeUnderline}>
          <img id="radius" src={TravisCI} style={{ width: "5%", height: "5%" }} alt="TravisCI" />
          <span>
            &nbsp; CI/CD!
          </span>
        </a>

      </div>

      <nav className="col-sm-12 col-md-6">
        <ul className="nav d-flex justify-content-around">
          <li className="nav-item">
            <Link to="About" duration={500} smooth className="nav-link" href="/"><Wave text="About" effect="stretch" effectChange={2.0} /></Link>
          </li>
          <li className="nav-item">
            <Link to="Projtcs" duration={500} smooth className="nav-link" href="/"><Wave text="Portfolio" effect="stretch" effectChange={2.0} /></Link>
          </li>
          <li className="nav-item">
            <Link to="Contact" duration={500} smooth className="nav-link" href="/"><Wave text="Contact" effect="stretch" effectChange={2.0} /></Link>
          </li>
        </ul>

      </nav>

    </header>
  );
}

export default NavBar;
