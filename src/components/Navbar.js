import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import logo from "../components/Images/Logos/Edgo-cropped.png"
import { Link } from "react-router-dom";


function Navbar() {
  return (

    <header class="py-2">
	<nav class="navbar navbar-expand-md shadow-sm">
		<div class="container-fluid">
			<Link class="navbar-brand" to="/"><img alt="Company Logo" class="img-fluid" height="" src={logo} width="300"></img></Link> <button aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent2" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent2">
				<ul class="navbar-nav ms-auto my-2 my-md-0">
					<li class="nav-item ms-md-4 fs-5">
						<Link class="nav-link" to="/">Home</Link>
					</li>
					<li class="nav-item ms-md-4 fs-5">
						<Link class="nav-link" to="/About">About</Link>
					</li>
					<li class="nav-item ms-md-4 fs-5">
						<Link class="nav-link" to="/Prices">Prices</Link>
					</li>
					<li class="nav-item ms-md-4 fs-5">
						<a class="nav-link" href="Blogs">Blogs</a>
					</li>
					<li class="nav-item ms-md-4 fs-5">
						<Link class="nav-link" to="/Contact">Contact</Link>
					</li>
					<li class="nav-item ms-md-4 fs-5">
						<a class="nav-link" href="/Careers">Careers</a>
					</li>
					<li class="nav-item ms-md-4 d-none d-md-block pe-4">
						<a class="btn btn-success fs-5" href="">Login</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
  )
}

export default Navbar;
