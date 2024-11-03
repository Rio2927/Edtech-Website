import React from 'react'

const Section = () => {
  return (
    <div>
      <section class="py-5">
	<div class="container">
		<div class="row justify-content-center text-center">
			<div class="col-lg-8">
				<span class="text-muted">Sign Up</span>
				<h2 class="display-5 fw-bold">Get Started</h2>
				<p class="lead">Login to access personalized resources, track your progress, and connect with our learning community.</p>
				<div class="row g-3 mt-4">
					<div class="col-md-6">
						<div class="d-grid">
							<button class="btn btn-success gap-3" type="button"><svg class="bi bi-twitter me-3" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg> Sign Up With Twitter</button>
						</div>
					</div>
					<div class="col-md-6">
						<div class="d-grid">
							<button class="btn btn-success gap-3" type="button"><svg class="bi bi-facebook me-3" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg> Sign Up With Facebook</button>
						</div>
					</div>
				</div>
				<div class="text-center text-muted py-4">
					OR
				</div>
				<div class="mx-auto mb-4">
					<form class="row g-3">
						<div class="col-md-4">
							<input class="form-control bg-light border" placeholder="Full name" type="text"></input>
						</div>
						<div class="col-md-4">
							<input class="form-control bg-light border" placeholder="Email address" type="text"></input>
						</div>
						<div class="col-md-4">
							<div class="d-grid">
								<button class="btn btn-success" type="submit">Subscribe</button>
							</div>
						</div>
					</form>
					<div class="row justify-content-center mt-4">
						<div class="col-lg-8">
							<p class="small text-muted"><em>Start your journey with us today and gain access to tools that make learning engaging, effective, and fun!</em></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Section;
