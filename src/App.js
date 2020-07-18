import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;