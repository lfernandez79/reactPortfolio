import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-list">
          <li>
            <NavLink to="/" className="nav-link">
              <motion.span
                className="nav-link-text"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.span>
            </NavLink>
          </li>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className="nav-link">
                <motion.span
                  className="nav-link-text"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
