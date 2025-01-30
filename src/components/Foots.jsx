import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div style={{ height: "200px" }} className="mt-5 p-2 text-white w-full bg-[#7c3aed] ">
      <div className="flex justify-between">
        {/* intro */}
        <div className="" style={{ width: "400px" }}>
        <Link className="text-2xl font-bold" to={'/'}>
      <i className="fa-solid fa-truck-fast me-2 mt-3"></i>Daily Cart
      </Link>
          <p>
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors.
          </p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.0.2.</p>
        </div>
        {/* link */}
        <div className="flex flex-col" >
          <h5>Links</h5>
         <Link to={'/'} style={{textDecoration:"none", color:"white"}}>Landing Page</Link>
         <Link to={'/home'} style={{textDecoration:"none", color:"white"}}>Home Page</Link>
         <Link to={'/history'} style={{textDecoration:"none", color:"white"}}>History Page</Link>
        </div>
        {/* guid */}
        <div className="flex flex-col" >
          <h5>Guids</h5>
         <a href="" style={{textDecoration:"none", color:"white"}}>React</a>
         <a href="" style={{textDecoration:"none", color:"white"}}>React Bootstrap</a>
         <a href="" style={{textDecoration:"none", color:"white"}}>React Router</a>
        </div>
        {/* contact */}
        <div className="flex flex-col">
          <h5>Contact Us</h5>
          <div className="flex">
          <input type="text" placeholder="Enter your Email !!" className="border p-1 me-1" />
          <button className="bg-white border rounded-full p-2 text-black"><FaArrowRight /></button>
          </div>
        <div className="flex justify-evenly mt-3">
            <a href="https://www.instagram.com" style={{textDecoration:"none",color:"white"}}><CiInstagram /></a>
            <a href="https://www.instagram.com" style={{textDecoration:"none",color:"white"}}><CiLinkedin /></a>
            <a href="https://www.instagram.com" style={{textDecoration:"none",color:"white"}}><FaFacebookF /></a>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
