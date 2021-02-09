import {useEffect, useState, } from 'react'
import logo from './arjun-logo.png';
import fit from './fitness.jpg';
import Navigation from './components/Navigation';
import Home from './components/Home';


function App() {

  return (
    <div className="App">
      <Navigation />
      <div className="webContent">
        <Home />
      </div>
    </div>
  );

  }


export default App;
