

import React from 'react';
import Home from './components/Home';

import Welcome from './components/Welcome';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => (
  <div>
    <Home/>
 
    <Welcome />
    <Services />
    <Projects />
    <About />
    <Clients />
    <Contact />
    <Footer />


    
  </div>

  
);

export default App;




