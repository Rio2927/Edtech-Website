import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import T1 from "./images/T1.jpg"
import T2 from "./images/T2.jpeg"
import T3 from "./images/T3.jpg"
import T4 from "./images/T4.jpg"

function Testimonials() {
  return (
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center text-center mb-2 mb-lg-4">
          <div class="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
            <span class="text-muted">Alumni</span>
            <h2 class="display-5 fw-bold">Hear from Our Achievers</h2>
            <p class="lead">
            Hear from those who’ve taken the leap, mastered new skills, and redefined their futures.
            </p>
          </div>
        </div>
        <div class="row g-5 py-4">
          <div class="col-lg-6 d-flex align-items-start">
            <img
              alt=""
              class="img-fluid me-3"
              src={T1}
              width="96"
            ></img>
            <div class="px-3 px-md-2">
              <div class="text-success mb-1">
                <svg
                  class="bi bi-quote"
                  fill="currentColor"
                  height="32"
                  viewbox="0 0 16 16"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                </svg>
              </div>
              <p>
              This platform has completely transformed the way I learn. The courses are practical, easy to follow, and the mentors are incredibly supportive!
              </p>
              <div class="text-start pt-2">
                <h5 class="fw-bold">Ananya Gupta</h5>
                <div class="text-muted">Data Scientist</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-start">
            <img
              alt=""
              class="img-fluid me-3"
              src={T2}
              width="96"
            ></img>
            <div class="px-3 px-md-2">
              <div class="text-success mb-1">
                <svg
                  class="bi bi-quote"
                  fill="currentColor"
                  height="32"
                  viewbox="0 0 16 16"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                </svg>
              </div>
              <p>
              I love the flexibility of learning at my own pace. The course content is always up-to-date with industry trends, making me feel confident about my career growth.
              </p>
              <div class="text-start pt-2">
                <h5 class="fw-bold">Priya Mehta</h5>
                <div class="text-muted">Marketing Professional</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-start">
            <img
              alt=""
              class="img-fluid me-3"
              src={T3}
              width="96"
            ></img>
            <div class="px-3 px-md-2">
              <div class="text-success mb-1">
                <svg
                  class="bi bi-quote"
                  fill="currentColor"
                  height="32"
                  viewbox="0 0 16 16"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                </svg>
              </div>
              <p>
              The expert guidance and personalized mentoring helped me switch careers seamlessly. I can't recommend this platform enough!
              </p>
              <div class="text-start pt-2">
                <h5 class="fw-bold">Suresh Nair</h5>
                <div class="text-muted">Software Engineer</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-start">
            <img
              alt=""
              class="img-fluid me-3"
              src={T4}
              width="96"
            ></img>
            <div class="px-3 px-md-2">
              <div class="text-success mb-1">
                <svg
                  class="bi bi-quote"
                  fill="currentColor"
                  height="32"
                  viewbox="0 0 16 16"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                </svg>
              </div>
              <p>
              Thanks to the hands-on projects, I was able to land my dream job in web development. The skills I gained here were exactly what employers were looking for.
              </p>
              <div class="text-start pt-2">
                <h5 class="fw-bold">Rahul Singh</h5>
                <div class="text-muted">Full Stack Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
