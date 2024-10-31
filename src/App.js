import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/AboutUs';
import Prices from "./components/Prices";
import Blogs from "./components/Blogs";
import Contact from './components/ContactUs';
import Footer from './components/Footer';
import Login from './components/Login';
import StandardCourses from './components/PricesComponents/SubPricesComponents/StandardCourses';
import PlusCourses from './components/PricesComponents/SubPricesComponents/PlusCourses';
import ProCourses from './components/PricesComponents/SubPricesComponents/ProCourses';
import UltimateCourses from './components/PricesComponents/SubPricesComponents/UltimateCourses';

export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Prices" element = {<Prices/>}/> 
        <Route path = "/Blogs" element = {<Blogs/>}/>
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Standardcourses" element = {<StandardCourses/>}/>
        <Route path = "/Pluscourses" element = {<PlusCourses/>}/>
        <Route path = "/Procourses" element = {<ProCourses/>}/>
        <Route path = "/Ultimatecourses" element = {<UltimateCourses/>}/>
      </Routes>

      <Footer />
    </>
  );
}
