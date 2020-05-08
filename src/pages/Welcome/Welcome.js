import React from "react";
import "./Welcome.css";

function Welcome() {
    return (
        <div className="container">
            <div className="row">
                <div style={{ background: "none" }} className="col jumbotron mt-5">
                    <h1 className="display-1 text-center">Hello!<br />My name is<br /> Leo</h1>
                    <h2 className="lead text-center">Web Developer | Full Stack | UI UX</h2>
                </div>
            </div>
            
        </div>
    )
}
export default Welcome;