import React from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/main-page/Navbar";
import Center from "./components/main-page/Center";
import image1 from "./photos/bakeback1.png";
import Content from "./components/main-page/Content";
import Contact from "./components/main-page/Contact";
import Cakes from "./components/new-pages/Cakes";
function App() {
  return (
    <div className="App">
        
        <img id="back-imge" src={image1} alt="background image" />

        <Navbar />
        <Center />
        <Content />
        <Contact />
      
        
  
    </div>
  );
}

export default App;
