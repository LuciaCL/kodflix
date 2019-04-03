import React, { Component } from 'react';
import image from './covers/mib.jpg';
import blackMirror from './covers/bmcover.jpg';
import breakingBad from './covers/bbcover.jpg';
import deathNote from './covers/dncover.jpg';
import gameOfThrones from './covers/gotcover.png';
import theWire from './covers/wwcover.jpg';
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
            <div className='item' >
              <img  src={blackMirror} alt="black mirror cover"/>
              <div className="overlay">
                <h1 >Black Mirror</h1>
              </div>
            </div>
            <div className='item'>
              <img src={breakingBad} alt="breaking bad cover"/>
              <div className="overlay">
                <h1> Breaking Bad</h1>  
              </div>
            </div>
            <div className='item'>
              <img src={deathNote} alt="death note cover"/>
              <div className="overlay">
                <h1>Death Note</h1>
              </div>  
            </div>
          </div>
          <div className='container' >
            <div className='item'>
              <img src={gameOfThrones} alt="game of thrones cover"/>
              <div className="overlay">
                <h1> Game of Thrones</h1>  
              </div>
            </div>
            <div className='item'>
              <img src={walkingDead} alt="walking dead cover"/>
              <div className="overlay">
                <h1> Walking Dead</h1>  
              </div>
            </div>
            <div className='item'>
              <img src={theWire} alt="the wire cover"/>
              <div className="overlay">
                <h1>Wonder Woman</h1>  
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

