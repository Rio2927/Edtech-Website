import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/AboutUs';
import Prices from "./components/Prices";
import Blogs from "./components/Blogs";
import Contact from './components/ContactUs';
import Careers from "./components/Careers"
import Footer from './components/Footer';

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
        <Route path = "/Careers" element = {<Careers/>}/>
      </Routes>

      <Footer />
    </>
  );
}
