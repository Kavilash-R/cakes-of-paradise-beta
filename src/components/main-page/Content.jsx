import "./Content.css";
import { Link } from "react-router-dom";


const Content = () => {
  return (
    <>
      <div className="MainArea">
        <div className="Searchbar">
          <input id="search-bar" type="text" placeholder="Search" />
        </div>

        <div id="Main-Area1" className="OverAllArea">
       
        <Link to ="/cakes"><div  className="CakeArea"></div></Link>
        <Link to="/puffs"><div className="PuffArea"></div></Link>
        <Link to="/others"><div className="OtherArea"></div></Link>
        
        </div>
        <div className="Popular-Image">
          <marquee behavior="scroll" direction="right" scrollamount="5">
            <div className="Image-Scroll"></div>
            <div className="Image-Scroll"></div>
            <div className="Image-Scroll"></div>
            <div className="Image-Scroll"></div>
            <div className="Image-Scroll"></div>
            <div className="Image-Scroll"></div>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Content;