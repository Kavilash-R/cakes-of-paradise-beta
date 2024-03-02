import React from "react";

import Navbar from "./components/Navbar";
import Center from "./components/Center";
import image1 from "./photos/bakeback1.png";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Cakes from "./components/Cakes";
function App() {
  return (
    <div className="App">
        
        <img id="back-imge" src={image1} alt="background image" />

        <Navbar />

       

        <Center />
        <Content />
        <Cakes />

        <Contact />
  
    </div>
  );
}

export default App;
