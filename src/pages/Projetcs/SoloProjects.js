import React from "react";

function SoloProjects() {
    return (
        <div id="Projtcs">

            <h2 id="text3d" className="text-center">Solo Projects</h2>

            <article className="container-lg my-3">
                <main>
                    <div className="row pt-2 px-3">
                        <div data-aos="fade-up" className="col-xs-12 col-md-6 col-lg-4">
                            <a href="https://placeholder.com"><img className="d-flex img-fluid mb-2" src="https://via.placeholder.com/300" alt="TravelAdvisor"></img></a>
                            <div className="d-flex justify-content-around">
                                <button type="button" className="btn btn-outline-dark btn-sm">Respository</button>
                                <button type="button" className="btn btn-outline-dark btn-sm">Deployed</button>
                            </div>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}
export default  SoloProjects