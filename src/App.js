import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Topsection from './components/Topsection';
import About from './components/About';
import Projects from './components/projects';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return ( 
<React.Fragment>
  <Navbar/>
  <Topsection/>
  <About/>
  <Projects/>
<Tools/>
<Testimonials/>
<Contact/>
<Footer/>
</React.Fragment>
  );
}

export default App;
