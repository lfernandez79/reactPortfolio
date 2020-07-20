import React from "react";
import TravelAdvisor from "../images/travelAdvisor.png";
import Blog from "../images/blogProject.png";
import Pizza from "../images/pizzaProject.png";
import Portfoliov1 from "../images/Portfoliov1.0.png";
import Portfolio from "../images/Portfoliov2.0.png";
import Password from "../images/passwordGenerator.png";
import "./Projects.css";

const style = {
  deco: {
    textDecorationLine: "none",
  },
};

function Projects() {
  return (
    <div id="Projtcs" className="container">
      <hr />
      <h2 className="text-center">Coding hover each project for details!</h2>

      <article id="view" className="my-3">

        <main>
          <div className="row d-flex justify-content-around my-3">

            <div data-aos="fade-up" className="zoomOut col-xs-12 col-md-5 p-0 m-1">
              <img className="d-flex img-fluid" src={TravelAdvisor} alt="TravelAdvisor" />
              <div className="overlay">
                <p className="text1">Travel Advisor</p>
                
                <p className="text2">Website to search airport information, world time and currency exchange, tech used: html, css, bootstrap, api, git, jquery</p>
                <p className="text3">
                  <a href="https://lfernandez79.github.io/project1/" style={style.deco}>Deployed </a>
                  <a href="https://github.com/lfernandez79/project1" style={style.deco}> GitHub</a>
                </p>
              </div>
            </div>

            <div data-aos="fade-down" className="zoomOut col-xs-12 col-md-5 p-0 m-1">
              <img className="d-flex img-fluid" src={Blog} alt="BLog" />
              <div className="overlay">
                <p className="text1">Restaurant Blog</p>
                <p className="text2">Search popular restaurants or create a blog about recent dining experience. We buid it using the following: heroku, passportjs, mysql, travis, eslint, sequelized, express, nodejs, jquery, handlebars, ZomatoAPI</p>
                <p className="text3">
                  <a href="https://project2-cody-gen-leo.herokuapp.com/" style={style.deco}>Deployed </a>
                  <a href="https://github.com/lfernandez79/project2" style={style.deco}> GitHub</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around my-3">
            <div data-aos="fade-left" className="zoomOut col-xs-12 col-md-5 p-0 m-1">
              <img className="d-flex img-fluid" src={Pizza} alt="PizzaPage" />
              <div className="overlay">
                <p className="text1">Zalat Pizza</p>
                <p className="text2">Reached a local pizza restaturant in Dallas, to mimic a website order application using: reacjs, mysql, passportjs, expressjs, nodejs, heroku</p>
                <p className="text3">
                  <a href="https://pizza-app-p3.herokuapp.com/" style={style.deco}>Deployed </a>
                  <a href="https://github.com/lfernandez79/project3" style={style.deco}> GitHub</a>
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="zoomOut col-xs-12 col-md-5 p-0 m-1">
              <img className="d-flex img-fluid" src={Portfoliov1} alt="Static Portfolio" />
              <div className="overlay">
                <p className="text1">Static Portfolio</p>
                <p className="text2">First portfolio created with basic knowledge on: html, css, bootstrap, javascript, aos,</p>
                <p className="text3">
                  <a href="https://lfernandez79.github.io/leoPortfolio/" style={style.deco}>Deployed </a>
                  <a href="https://github.com/lfernandez79/leoPortfolio" style={style.deco}> GitHub</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around my-3">
            <div data-aos="fade-down" className="zoomOut col-xs-12 col-md-5 p-0 m-1">
              <img className="d-flex img-fluid" src={Portfolio} alt="React Portfolio" />
              <div className="overlay">
                <p className="text1">React Portfolio</p>
                <p className="text2">Dynamic porfolio using:  reactjs, vantajs, react-animated-text, router-dom</p>
                <p className="text3">
                  <a href="https://lfernandez79.github.io/reactPortfolio/" style={style.deco}>Deployed </a>
                  <a href="https://github.com/lfernandez79/reactPortfolio" style={style.deco}> GitHub</a>
                </p>
              </div>
            </div>

            <div data-aos="fade-left" className="zoomOut col-xs-12 col-md-5 p-0 m-1">
              <img className="d-flex img-fluid" src={Password} alt="passwordGenerator" />
              <div className="overlay">
                <p className="text1">Password Generator</p>
                <p className="text2">Pure JavaScript password generator website using: html, css, javascript, DOM</p>
                <p className="text3">
                  <a href="https://lfernandez79.github.io/pwdGenerator/" style={style.deco}>Deployed </a>
                  <a href="https://github.com/lfernandez79/pwdGenerator" style={style.deco}> GitHub</a>
                </p>
              </div>
            </div>

          </div>

        </main>
      </article>
    </div>
  );
}
export default Projects;
