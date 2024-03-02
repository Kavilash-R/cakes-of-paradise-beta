import "./Content.css";
import Cakes from "./Cakes";

const Content = () => {
  return (
    <>
      <div className="MainArea">
        <div className="Searchbar">
          <input id="search-bar" type="text" placeholder="Search" />
        </div>

        <div id="Main-Area1" className="OverAllArea">
       
          <div onClick={()=>Cakes()} className="CakeArea"></div>
          <div className="PuffArea"></div>
          <div className="OtherArea"></div>
        
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
