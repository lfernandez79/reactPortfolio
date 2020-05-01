import React from "react";
import "./About.css";
import PorImg from "./images/Leo.jpg"

function About() {
    return (
        <div>
            <section className="container mt-5 border-0">
                <main className="row">
                    <div className="col-md-12 pl-3 pt-3">

                    </div>

                    <div className="row pt-2 px-3">
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <img id="grayscale" className="img-fluid d-flex align-items-md-stretch" src={PorImg} alt="LeoFernandez"></img>
                        </div>

                            <div className="col-xs-12 col-md-6 col-lg-9 intro">
                                <p>Hello my name is Leo Fernandez and I'm a full stack developer
                                I'm based in Dallas, TX. Beside coding, I enjoy spending time with my two girls. I love coffee,
                                can't live without it. I also enjoy cooking, very relaxing if you ask me.</p>
                            </div>
                    </div>

                    <div className="row mt-3 pl-3">
                            <div className="col-md-12 mt-5">
                                <p className="text-center ml12">My skill range from HTML, CSS, Bootstrap, jQuery, Javascript, MySQL and
                                some others that I'm still working on. I love to be part of the process where you are putting
                                pieces together like a lego puzzle, then add any functionbality that you can think of, coding is
                                unlimited!</p>
                            </div>
                        </div>

                </main>
            </section>
        </div>
    );
}
export default About;