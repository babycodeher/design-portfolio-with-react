import React from "react";
// import '../../styles/project.css';
import workPlanner from '../../images/stock-images/work-scheduler.jpeg';
import foodApp from '../../images/stock-images/food-app.jpeg';
import pwGenImg from '../../images/stock-images/password-gen.jpeg';
import readmeGen from '../../images/stock-images/readme-gen.jpeg';
import teamImg from '../../images/stock-images/team-builder.jpeg';
import weatherImg from '../../images/stock-images/weather-app.jpeg';

function Project() {
  return (
    <div>
      <div class="container text-center">
        {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
        <div class="row">
          <div class="card col-6">
            <img src={workPlanner} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Work Day Planner</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-6">
            <img src={foodApp} class="card-img-top" alt="..." />
            <h5 class="card-title">Food Recipe App</h5>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>


        {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
        <div class="row">
          <div class="card col-6">
            <img src={pwGenImg} class="card-img-top" alt="..." />
            <h5 class="card-title">Password Generator</h5>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-6">
            <img src={readmeGen} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">README Generator</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>


        {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
        <div class="row">
          <div class="card col-6">
            <img src={teamImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Team Builder</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="card col-6">
            <img src={weatherImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Team Builder</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
