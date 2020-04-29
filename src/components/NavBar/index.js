import React from "react";

function NavBar() {
  return (
    <header className="container-fluid row m-0">

      <div className="col-sm-12 col-md-6 py-2">
        <h3 className="d-flex justify-content-center align-items-center"><i className="fab fa-css3-alt fa-lg"></i>Leo Fernandez</h3>

      </div>

      <nav className="col-sm-12 col-md-6 py-2">
        <ul className="nav d-flex justify-content-center align-items-center">
          <li className="nav-item">
            <a className="nav-link ml7" href="index.html">A b o u t</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolio.html">P o r t f o l i o</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">C o n t a c t</a>
          </li>
        </ul>

      </nav>

    </header>
  );
}

export default NavBar;
