import React from "react";
// import '../../styles/project.css';
// import workPlanner from '../../images/stock-images/work-scheduler';
import mainImg from '../../images/SC_Main.jpg';

function Project() {
  return (
    <div>
      <div class="container text-center">
        {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
        <div class="row">
          <div class="card col-md-8">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Work Day Planner</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div class="card col-6 col-md-4">
            <img src="..." class="card-img-top" alt="..." />
            {/* <div class="card-body"> */}
            <h5 class="card-title">Food Recipe App</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
        <div class="row">
          <div class="card col-6">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div class="card col-6">
            <img src="..." class="card-img-top" alt="..." />
            {/* <div class="card-body"> */}
            <h5 class="card-title">README Generator</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
        <div class="row">
          <div class="card col-6 col-md-4">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Team Builder</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div class="card col-md-8">
            <img src="..." class="card-img-top" alt="..." />
            {/* <div class="card-body"> */}
            <h5 class="card-title">Weather App</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Project;
