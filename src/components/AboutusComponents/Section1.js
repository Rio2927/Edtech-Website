import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import A1 from "./Images/1.jpg"



function Section1() {
  return (
    <section class="py-5">
      <div class="container">
        <div class="row gx-4 align-items-center justify-content-between">
          <div class="col-md-5 order-2 order-md-1">
            <div class="mt-5 mt-md-0">
              <span class="text-muted">Our Story</span>
              <h2 class="display-5 fw-bold">About Us</h2>
              <p class="lead">
              At Edgo, we are dedicated to revolutionizing education by providing high-quality, 
              accessible, and flexible learning opportunities for individuals around the world. 
              Our mission is to empower learners with the skills they need to thrive in today’s 
              fast-paced, ever-changing digital landscape. Whether you are looking to upskill, 
              reskill, or start a new career, we have the resources and expert guidance to help 
              you achieve your goals.
              </p>
              <p class="lead">
              Since our inception, we have helped thousands of learners around the globe succeed 
              by combining cutting-edge technology with expert instruction. 
              </p>
              <a class="btn btn-success mt-2" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="col-md-5 order-1 order-md-2">
            <img
              class="img-fluid rounded-3"
              src={A1}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
