import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./style.css";

const navItems = [
  { to: "About", label: "About" },
  { to: "Projects", label: "Portfolio" },
  { to: "Contact", label: "Contact" },
];

function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-list">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} duration={500} smooth className="nav-link" href="/">
                <motion.span
                  className="nav-link-text"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
