import React from "react";
import Style from "style-it";
import TravelAdvisor from "../images/travelAdvisor.png"
import Blog from "../images/blogProject.png"
import Pizza from "../images/pizzaProject.png"
import Portfoliov1 from "../images/Portfoliov1.0.png"
import Portfolio from "../images/Portfoliov2.0.png"



function Projects() {
    return (
        <div id="Projtcs">

            <h2 id="text3d" className="text-center">Coding</h2>

            <article id="view" className="container-lg my-3">

                <main>
                    <div className="row pt-2 px-3">
                        <Style>
                        {`
                            
                            .blue-bkg-text {
                                opacity: 1;
                                background-color: #008CBA;
                                
                            }
                            
                            img:hover {
                                opacity: 0;
                                transition: .5s ease;
                            }
                           
                            .text {
                                color: white;
                                font-size: 20px;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                -webkit-transform: translate(-50%, -50%);
                                -ms-transform: translate(-50%, -50%);
                                transform: translate(-50%, -50%);
                                text-align: center;
                            }
                            
                        
                        `}
                            <div data-aos="fade-up" className="blue-bkg-text col-xs-12 col-md-6 col-lg-4 p-0">
                                <a href="https://lfernandez79.github.io/project1/"><img className="d-flex img-fluid" src={TravelAdvisor} alt="TravelAdvisor"></img></a>
                                <div className="overlay d-flex justify-content-around"> 
                                     <div className="text">Some text</div>                                  
                                </div>
                            </div>
                        </Style>
                        <div data-aos="fade-down" className="col-xs-12 col-md-6 col-lg-4">
                            <a href="https://project2-cody-gen-leo.herokuapp.com/"><img className="d-flex img-fluid" src={Blog} alt="BLog"></img></a>
                            <div className="d-flex justify-content-around">

                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-xs-12 col-md-6 col-lg-4">
                            <a href="https://pizza-app-p3.herokuapp.com/"><img className="d-flex img-fluid" src={Pizza} alt="PizzaPage"></img></a>
                            <div className="d-flex justify-content-around">

                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-xs-12 col-md-6 col-lg-4">
                            <a href="https://lfernandez79.github.io/leoPortfolio/"><img className="d-flex img-fluid" src={Portfoliov1} alt="Static Portfolio"></img></a>
                            <div className="d-flex justify-content-around">

                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-xs-12 col-md-6 col-lg-4">
                            <a href="https://lfernandez79.github.io/reactPortfolio/"><img className="d-flex img-fluid" src={Portfolio} alt="React Portfolio"></img></a>
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