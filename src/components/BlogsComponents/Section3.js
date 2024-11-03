import React from 'react'
import B6 from "./Images/6.jpg"
import B7 from "./Images/7.jpg"
import B8 from "./Images/8.jpg"

const Section3 = () => {
  return (
    <div>
      <section class="py-5">
	<div class="container">
		<div class="row justify-content-center text-center mb-4 mb-md-5">
			<div class="col-xl-9 col-xxl-8">
				<span class="text-muted">Read More</span>
				<h2 class="display-5 fw-bold">Content that went famous!</h2>
				<p class="lead">Discover what it really needs to be successful in any square of life.</p>
			</div>
		</div>
		<div class="row g-5">
			<div class="col-md-4">
				<div class="card border-0">
					<a href=""><img alt="" class="img-fluid rounded" src = {B6}></img></a>
					<div class="card-body p-0 text-center mt-4">
						<h5><a class="text-dark text-decoration-none" href="">E-Learning vs. Traditional Learning</a></h5>
						<p class="mt-3">E-Learning and traditional learning each offer unique benefits, catering to different needs and learning styles. E-Learning brings flexibility, allowing students to learn at their own pace and access resources from anywhere. </p>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card border-0">
					<a href=""><img alt="" class="img-fluid rounded" src = {B7}></img></a>
					<div class="card-body p-0 text-center mt-4">
						<h5><a class="text-dark text-decoration-none" href="">The Role of AI in Personalized Learning</a></h5>
						<p class="mt-3">AI is transforming personalized learning by tailoring educational experiences to meet the unique needs of each student.</p>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card border-0">
					<a href=""><img alt="" class="img-fluid rounded" src = {B8}></img></a>
					<div class="card-body p-0 text-center mt-4">
						<h5><a class="text-dark text-decoration-none" href="">Learning Languages with Technology</a></h5>
						<p class="mt-3">Technology has revolutionized language learning, making it more accessible, interactive, and effective than ever before.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Section3
