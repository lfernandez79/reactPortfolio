import React from "react";
import TravelAdvisor from "../images/travelAdvisor.png"
import Blog from "../images/blogProject.png"
import Pizza from "../images/pizzaProject.png"
import Portfoliov1 from "../images/Portfoliov1.0.png"
import Portfolio from "../images/Portfoliov2.0.png"
import "./Projects.css"

const style = {
    font: {
        fontSize: "2rem"
    },
    deco: {
        textDecorationLine: "none"
    },
}

function Projects() {
    return (
        <div>
            <h2 className="text-center">Coding</h2>

            <article id="view" className="container-lg my-3">
                <main>
                    <div className="row pt-2 px-3">

                        <div data-aos="fade-up" className="container col-xs-12 col-md-6 col-lg-4 p-0">
                            <img className="d-flex img-fluid" src={TravelAdvisor} alt="TravelAdvisor"></img>
                            <div className="overlay">
                                <p className="text1" style={style.font}>Some Text</p>
                                <p className="text2"><a href="https://lfernandez79.github.io/project1/" style={{ ...style.font, ...style.deco }}>Live </a>
                                    <a href="https://lfernandez79.github.io/project1/" style={{ ...style.font, ...style.deco }}> GitHub</a></p>
                            </div>
                        </div>

                        <div data-aos="fade-down" className="container col-xs-12 col-md-6 col-lg-4 p-0">
                            <a href="https://project2-cody-gen-leo.herokuapp.com/"><img className="d-flex img-fluid" src={Blog} alt="BLog"></img></a>
                            <div className="overlay">
                                <div className="text">Some text</div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="container col-xs-12 col-md-6 col-lg-4 p-0">
                            <a href="https://pizza-app-p3.herokuapp.com/"><img className="d-flex img-fluid" src={Pizza} alt="PizzaPage"></img></a>
                            <div className="overlay">
                                <div className="text">Some text</div>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="container col-xs-12 col-md-6 col-lg-4 p-0">
                            <a href="https://lfernandez79.github.io/leoPortfolio/"><img className="d-flex img-fluid" src={Portfoliov1} alt="Static Portfolio"></img></a>
                            <div className="overlay">
                                <div className="text">Some text</div>
                            </div>
                        </div>

                        <div data-aos="fade-down" className="container col-xs-12 col-md-6 col-lg-4 p-0">
                            <a href="https://lfernandez79.github.io/reactPortfolio/"><img className="d-flex img-fluid" src={Portfolio} alt="React Portfolio"></img></a>
                            <div className="overlay">
                                <div className="text">Some text</div>
                            </div>
                        </div>

                    </div>
                </main>
            </article>
        </div>
    );
}
export default Projects;