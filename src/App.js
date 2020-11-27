import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Navigation';
import Cards from './Cards';
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        <ImageSlider/>
        <Cards></Cards>
    </div>
  );
}

export default App;
