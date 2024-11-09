import React from 'react'
import B1 from "./Images/1.jpg"
import B2 from "./Images/2.jpg"
import B3 from "./Images/3.jpg"
import B4 from "./Images/4.jpg"
import B5 from "./Images/5.jpg"

const Section1 = () => {
  return (
    <section class="py-5">
	<div class="container">
		<div class="row justify-content-center text-center mb-4 mb-md-5">
			<div class="col-xl-9 col-xxl-8">
				<h2 class="display-5 fw-bold">Blogs</h2>
				<p class="lead">Explore the latest advancements and ideas shaping the future of learning and teaching.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="card border-0">
					<a href=""><img alt="" class="img-fluid rounded" src = {B1}></img></a>
					<div class="card-body px-0">
						<a class="text-success fw-semibold text-decoration-none" href="">Category</a>
						<h3 class="fw-semibold my-2"><a class="text-decoration-none text-dark" href="">Essential Skills for Success in the Digital Age</a></h3>
						<p>Edtech is revolutionizing education, making learning more accessible, engaging, and personalized than ever. Through online platforms, interactive tools, and data-driven insights, students and educators can connect in ways that were once unimaginable. Skills like critical thinking, adaptability, and digital literacy have become essential, preparing students for a rapidly changing world. As Edtech continues to grow, it’s breaking down geographical and financial barriers, offering equal opportunities to learners worldwide. Whether it’s through gamification, AI-driven personalized learning, or virtual labs, Edtech empowers learners to study smarter, build lifelong skills, and stay ready for future challenges.






</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class="col-6">
						<div class="card border-0">
							<a href=""><img alt="" class="img-fluid rounded" src = {B2}></img></a>
							<div class="card-body px-0">
								<a class="text-success fw-semibold text-decoration-none" href="">Category</a>
								<h3 class="fw-semibold"><a class="text-decoration-none text-dark" href="">10 Essential Skills for Success in the Digital Age</a></h3>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="card border-0">
							<a href=""><img alt="" class="img-fluid rounded" src = {B3}></img></a>
							<div class="card-body px-0">
								<a class="text-success fw-semibold text-decoration-none" href="">Category</a>
								<h3 class="fw-semibold"><a class="text-decoration-none text-dark" href="">The Future of Learning: How Edtech is Transforming Education</a></h3>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="card border-0">
							<a href=""><img alt="" class="img-fluid rounded" src = {B4}></img></a>
							<div class="card-body px-0">
								<a class="text-success fw-semibold text-decoration-none" href="">Category</a>
								<h3 class="fw-semibold"><a class="text-decoration-none text-dark" href="">Study Smarter, Not Harder: Top Tips for Effective Online Learning</a></h3>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="card border-0">
							<a href=""><img alt="" class="img-fluid rounded" src = {B5}></img></a>
							<div class="card-body px-0">
								<a class="text-success fw-semibold text-decoration-none" href="">Category</a>
								<h3 class="fw-semibold"><a class="text-decoration-none text-dark" href="">Gamification in Education: Making Learning Fun and Engaging</a></h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Section1
