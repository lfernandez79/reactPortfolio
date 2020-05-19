import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/TeamProjects" className={location.pathname === "/TeamProjects" ? "nav-link active" : "nav-link"}>
                    Team Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/SoloProjects" className={location.pathname === "/SoloProjects" ? "nav-link active" : "nav-link"}>
                    Solo Projects
                </Link>
            </li>
        </ul>
    )
}
export default Navigation;