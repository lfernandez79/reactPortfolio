import React from "react";
import Style from "style-it";
import TravelAdvisor from "../images/travelAdvisor.png"
import Blog from "../images/blogProject.png"
import Pizza from "../images/pizzaProject.png"
import Portfoliov1 from "../images/Portfoliov1.0.png"
import Portfolio from "../images/Portfoliov2.0.png"
import "./Projects.css"


function Projects() {
    return (
        <div id="Projtcs">

            <h2 id="text3d" className="text-center">Coding</h2>

            <article id="view" className="container-lg my-3">

                <main>
                    <div className="row pt-2 px-3">
                        <Style>
                        {`
                        
                            .hidden {
                                background-color: #008CBA;
                            }
                            .hidden:hover {                              
                                opacity: 0;
                                }
                        
                        `}
                            <div data-aos="fade-up" className="hidden col-xs-12 col-md-6 col-lg-4 mt-4">
                                <a href="https://lfernandez79.github.io/project1/"><img className="d-flex img-fluid mb-2" src={TravelAdvisor} alt="TravelAdvisor"></img></a>
                                <div className="overlay d-flex justify-content-around"> 
                                                                       
                                </div>
                            </div>
                        </Style>
                        <div data-aos="fade-down" className="col-xs-12 col-md-6 col-lg-4 mt-4">
                            <a href="https://project2-cody-gen-leo.herokuapp.com/"><img className="d-flex img-fluid mb-2" src={Blog} alt="BLog"></img></a>
                            <div className="d-flex justify-content-around">

                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-xs-12 col-md-6 col-lg-4 mt-4">
                            <a href="https://pizza-app-p3.herokuapp.com/"><img className="d-flex img-fluid mb-2" src={Pizza} alt="PizzaPage"></img></a>
                            <div className="d-flex justify-content-around">

                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-xs-12 col-md-6 col-lg-4 mt-4">
                            <a href="https://lfernandez79.github.io/leoPortfolio/"><img className="d-flex img-fluid mb-2" src={Portfoliov1} alt="Static Portfolio"></img></a>
                            <div className="d-flex justify-content-around">

                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-xs-12 col-md-6 col-lg-4 mt-4">
                            <a href="https://lfernandez79.github.io/reactPortfolio/"><img className="d-flex img-fluid mb-2" src={Portfolio} alt="React Portfolio"></img></a>
                            <div className="d-flex justify-content-around">

                            </div>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    );
}
export default Projects;