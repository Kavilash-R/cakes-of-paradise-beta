import React from 'react';
import Navbar from './components/Navbar';
import Center from './components/Center';
import image1 from './photos/bakeback1.png';
import Content from './components/Content';
function App() {
  return (
    <div className="App">
      <img src={image1} alt="background image" />
     <Navbar />
     <Center />
     <Content />

    </div>
  );
}

export default App;
