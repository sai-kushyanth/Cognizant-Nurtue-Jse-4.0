// src/App.js
import React from 'react';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';

function App() {
  return (
    <div className="App">
      <center>
      <Home />
      <About />
      <Contact />
      </center>
    </div>
  );
}

export default App;
