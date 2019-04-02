import React, { Component } from 'react';
import image from './covers/mib.jpg';
import blackMirror from './covers/bmcover.jpg';
import breakingBad from './covers/brbcover.jpg';
import deathNote from './covers/dncover.jpg';
import gameOfThrones from './covers/gotcover.jpeg';
import theWire from './covers/twcover.jpeg';
import walkingDead from './covers/wdcover.jpg';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Kodflix</h1>
        <img src={image} alt="first cover"/>
        <br/>
        <div className='container'>
          <div className='item'>
            <img src={blackMirror} alt="first cover"/>
          </div>
          <div className='item'>
            <img src={breakingBad} alt="first cover"/>
          </div>
          <div className='item'>
            <img src={deathNote} alt="first cover"/>
          </div>
        </div>
        <div className='container' >
          <div className='item'>
            <img src={gameOfThrones} alt="first cover"/>
          </div>
          <div className='item'>
            <img src={walkingDead} alt="first cover"/>
          </div>
          <div className='item'>
            <img src={theWire} alt="first cover"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
