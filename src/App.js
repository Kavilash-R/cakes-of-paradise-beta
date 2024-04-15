import React from "react";
import Navbar from "./components/main-page/Navbar";
import Center from "./components/main-page/Center";
import image1 from "./photos/bakeback1.png";
import Content from "./components/main-page/Content";
import Contact from "./components/main-page/Contact";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
        
        <img id="back-imge" src={image1} alt="background image" />
        <Link to ="/cakes"><img className ='content-image' id="content-cakes1" src="./images/Cakes-.jpg" alt="" /></Link>
        <Link to ="/puffs"><img className ='content-image'  id="content-cakes2" src="./images/puffs1.png" alt="" /></Link>
        <Link to ="/others"><img className ='content-image'  id="content-cakes3" src="./images/cookies.jpg" alt="" /></Link>

        <Navbar />
        <Center />
        <Content />
        <Contact />
        
      
        
  
    </div>
  );
}

export default App;
