import {useEffect, useState, } from 'react'
import logo from './arjun-logo.png';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './footer'



function App() {

  return (
    <div className="App">
      <Navigation />

      <div className="webContent">
        <Home />

      </div>

      <Footer />
    </div>

  );

  }


export default App;
