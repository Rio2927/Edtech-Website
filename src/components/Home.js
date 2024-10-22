import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Hero from "./HomeComponents/Hero"
import Imgslider from "./HomeComponents/imgslider"
import Team from "./HomeComponents/Team"
import Testimonials from "./HomeComponents/Testimonials"


function Home() {
  return (
    <div>
    <Hero></Hero>
    { /*Imgslider */}
    <Team></Team>
    <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
