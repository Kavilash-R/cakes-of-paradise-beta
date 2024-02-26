import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Center from './components/Center';
import image1 from './photos/bakeback1.png';
import Content from './components/Content';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <img src={image1} alt="background image" />
      <Router>
     <Navbar />
     <Routes>
        <Route path="/" exact component={Center} />
        <Route path="/target" component={Content} />
     </Routes>
     <Center />
     <Content />
     </Router>
     <Contact/>

    </div>
  );
}

export default App;
