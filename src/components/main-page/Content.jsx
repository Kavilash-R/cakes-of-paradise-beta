import "./Content.css";
import { Link } from "react-router-dom";


const Content = () => {
  return (
    <>
      <div className="MainArea">
        <div className="Searchbar">
          <input id="search-bar" type="text" placeholder="Search" />
        </div>
        <h3 className="cakes-heading">CAKES</h3>
        <h3 className="savory-head">SAVORY </h3>
        <h3 className="cookies-heading">COOKIES & OTHERS</h3>

        <div id="Main-Area1" className="OverAllArea">
       
        <Link to ="/cakes"><div  className="CakeArea"></div></Link>
        <Link to="/puffs"><div className="PuffArea"></div></Link>
        <Link to="/others"><div className="OtherArea"></div></Link>
        
        </div>
        <div className="Popular-Image">
        <marquee behavior="scroll" direction="right" scrollamount="15">
           <Link  to ="/cakes"> <img className="Image-Scroll" src="./images/blackforest.jpg"></img></Link>
           <Link to="/puffs"><img className="Image-Scroll" src="./images/chicken puff 1.jpg"></img></Link>
           <Link to="/puffs"><img className="Image-Scroll" src="./images/bhel puri.jpg"></img></Link>
           <Link to="/others"><img className="Image-Scroll" src="./images/chocochip cookies.jpeg"></img></Link>
            <Link to="/others"><img className="Image-Scroll" src="./images/plain bun.jpg"></img></Link>
            <Link to ="/cakes"><img className="Image-Scroll"  src="./images/choco turffle.jpeg"></img></Link>
        
          </marquee>
          
          
        </div>
      </div>
    </>
  );
};

export default Content;
