import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import A2 from "./Images/2.jpg"
import A3 from "./Images/3.png"
import A4 from "./Images/4.jpg"
import A5 from "./Images/5.jpg"
import A6 from "./Images/6.jpg"



function Section2() {
  return (
    <section class="py-5 bg-theme">
	<div class="container">
		<div class="row justify-content-center text-center mb-2 mb-lg-4">
			<div class="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
				<span class="text-muted">Showcase</span>
				<h2 class="display-5 fw-bold">Our Gallery</h2>
				<p class="lead">Take a glimpse into the vibrant learning community at Edgo. 
					From interactive workshops and live mentor sessions to success stories 
					and project showcases, our gallery highlights the moments that make our 
					platform truly special.</p>
			</div>
		</div>
		<div class="row py-3 align-items-center">
			<div class="col-md-6 mt-md-0 mt-4">
				<div class="mb-5 mb-lg-3"><img class="img-fluid" src = {A2}></img></div>
			</div>
			<div class="col-md-6 ps-md-5">
				<div class="mb-5 mb-lg-3">
					<h4>A Visual Journey of Growth and Innovation</h4>
					<p>Step into our world of learning, where every image captures the progress, 
						creativity, and breakthroughs of our students and mentors. Explore how 
						innovation and growth come to life.</p>
					<p>Join us in celebrating the achievements and milestones of our community 
						as we inspire each other to reach new heights.</p><a class="btn btn-lg btn-success" href="">View Gallery</a>
				</div>
			</div>
		</div>
		<div class="row mt-2">
			<div class="col-lg-3 col-md-6">
				<div class="mb-3 mb-lg-0"><img alt="" class="img-fluid" src = {A3}></img></div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="mb-3 mb-lg-0"><img alt="" class="img-fluid" src = {A4}></img></div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="mb-3 mb-lg-0"><img alt="" class="img-fluid" src = {A5}></img></div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="mb-3 mb-lg-0"><img alt="" class="img-fluid" src = {A6}></img></div>
			</div>
		</div>
	</div>
</section>
  );
}

export default Section2;
