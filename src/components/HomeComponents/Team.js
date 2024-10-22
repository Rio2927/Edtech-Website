import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



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
                        src="https://freefrontend.dev/assets/rectangle-wide.png"
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Catchy Title One</h6>
                        <div class="text-muted">Project Details</div>
                        <p class="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src="https://freefrontend.dev/assets/rectangle-wide.png"
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Catchy Title Two</h6>
                        <div class="text-muted">Project Details</div>
                        <p class="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src="https://freefrontend.dev/assets/rectangle-wide.png"
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Catchy Title Three</h6>
                        <div class="text-muted">Project Details</div>
                        <p class="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut.
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
                        src="https://freefrontend.dev/assets/rectangle-wide.png"
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Catchy Title Four</h6>
                        <div class="text-muted">Project Details</div>
                        <p class="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src="https://freefrontend.dev/assets/rectangle-wide.png"
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Catchy Title Five</h6>
                        <div class="text-muted">Project Details</div>
                        <p class="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card border-0 rounded-0 shadow mb-4 mb-md-0">
                      <img
                        alt=""
                        class="img-fluid"
                        src="https://freefrontend.dev/assets/rectangle-wide.png"
                      ></img>
                      <div class="card-body text-center mt-3">
                        <h6>Catchy Title Six</h6>
                        <div class="text-muted">Project Details</div>
                        <p class="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut.
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
  