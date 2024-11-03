import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Team1 from "./images/Team1.jpg"
import Team2 from "./images/Team2.jpg"
import Team3 from "./images/Team3.jpg"
import Team4 from "./images/Team4.jpg"
import Team5 from "./images/Team5.jpg"
import Team6 from "./images/Team6.jpg"



function Team() {
    return (
      <section class="py-5 bg-theme">
        <div class="container">
          <div class="row justify-content-center text-center mb-3 mb-md-5">
            <div class="col-lg-8 col-xxl-7">
              <span class="text-muted">Showcase</span>
              <h2 class="display-5 fw-bold mb-3">The People Powering Our Mission</h2>
              <p class="lead">
              Driven by innovation and excellence, our team is committed to providing top-notch education.
              </p>
            </div>
          </div>
          <div
            class="carousel slide pointer-event"
            data-bs-ride="carousel"
            id="portfolioCarousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item p-4">
                <div class="row g-5">
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src = {Team1}
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Mr. Anthony D'souza</h6>
                        <div class="text-muted">Business Management Expert</div>
                        <p class="mt-3">
                          With 7+ years of experience,he is the Head of Business Administration
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src = {Team2}
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Ms. Angel Watson</h6>
                        <div class="text-muted">Coding Expert (Python)</div>
                        <p class="mt-3">
                          With hands on experience in Tech giants,she is the
                          coding spearhead at Edgo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src = {Team3}
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Mr. Joe Headstone</h6>
                        <div class="text-muted">Mathematics Wizard</div>
                        <p class="mt-3">
                          With mastery over the subject,he is the leading 
                          faculty at Edgo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item p-4 active">
                <div class="row g-5">
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src = {Team4}
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Mr. Soham Gupta</h6>
                        <div class="text-muted">The Chemist</div>
                        <p class="mt-3">
                          With infectious passion for chemistry,he has trained 
                          multiple call-getters from top universities
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src = {Team5}
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Mr. Bryan O'Neil </h6>
                        <div class="text-muted">The Next Newton</div>
                        <p class="mt-3">
                          With passion for Physics,he is the leading researcher for 
                          Quantumn Energy
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src = {Team6}
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Ms. Lisa Faulkner</h6>
                        <div class="text-muted">Coding Expert (Web)</div>
                        <p class="mt-3">
                          With un-commonly high intellect and enthusiasm,
                          she is the leading Software Engineer 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              data-bs-slide="prev"
              data-bs-target="#portfolioCarousel"
              type="button"
            >
              <span
                aria-hidden="true"
                class="carousel-control-prev-icon"
              ></span>{" "}
              <span class="visually-hidden">Previous</span>
            </button>{" "}
            <button
              class="carousel-control-next"
              data-bs-slide="next"
              data-bs-target="#portfolioCarousel"
              type="button"
            >
              <span
                aria-hidden="true"
                class="carousel-control-next-icon"
              ></span>{" "}
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default Team;
  