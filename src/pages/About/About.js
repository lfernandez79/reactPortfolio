import React from "react";
import "./About.css";
import PorImg from "../images/Leo.jpg"

function About() {
    return (
        <div style={{ background: "none" }}>
            
                <section id="About" className="container mt-5 border-0">
                    <main>
                

                        <div className="row pt-2 px-3">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <img id="grayscale" className="img-fluid d-flex align-items-md-stretch" src={PorImg} alt="LeoFernandez"></img>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-9 intro">
                                <p>I'm a full stack developer
                                I'm based in Dallas, TX. Beside coding, I enjoy spending time with my two girls. I love coffee,
                                can't live without it. I also enjoy cooking, very relaxing if you ask me.</p>

                                <p>My skill range from HTML, CSS, Bootstrap, jQuery, Javascript, MySQL and
                                some others that I'm still working on. I love to be part of the process where you are putting
                                pieces together like a lego puzzle, then add any functionality that you can think of, coding is
                                unlimited!</p>
                            </div>
                        </div>
                    </main>
                <hr></hr>
                <br />
                </section>
            
        </div>
    );
}
export default About;