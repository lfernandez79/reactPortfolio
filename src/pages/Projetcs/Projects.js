import React from "react";
import TravelAdvisor from "../images/travelAdvisor.png"
import Blog from "../images/blogProject.png"
import Pizza from "../images/pizzaProject.png"
import "./Projects.css"

function Projects() {
    return (
        <div id="Projtcs">

            <h2 id="text3d" className="text-center">Team Projects</h2>

            <article id="view" className="container-lg my-3">

                <main>                   
                    <div className="row pt-2 px-3">
                        <div data-aos="fade-up" className="col-xs-12 col-md-6 col-lg-4">
                            <a href="https://lfernandez79.github.io/project1/"><img className="d-flex img-fluid mb-2" src={TravelAdvisor} alt="TravelAdvisor"></img></a>
                            <div className="d-flex justify-content-around">
                                <button type="button" className="btn btn-outline-dark btn-sm">Respository</button>
                                <button type="button" className="btn btn-outline-dark btn-sm">Deployed</button>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-xs-12 col-md-6 col-lg-4">
                            <a href="https://project2-cody-gen-leo.herokuapp.com/"><img className="d-flex img-fluid mb-2" src={Blog} alt="BLog"></img></a>
                            <div className="d-flex justify-content-around">
                                <button type="button" className="btn btn-outline-dark btn-sm">Respository</button>
                                <button type="button" className="btn btn-outline-dark btn-sm">Deployed</button>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-xs-12 col-md-6 col-lg-4">
                            <a href="https://pizza-app-p3.herokuapp.com/"><img className="d-flex img-fluid mb-2" src={Pizza} alt="PizzaPage"></img></a>
                            <div className="d-flex justify-content-around">
                                <button type="button" className="btn btn-outline-dark btn-sm">Respository</button>
                                <button type="button" className="btn btn-outline-dark btn-sm">Deployed</button>
                            </div>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    );
}
export default Projects;