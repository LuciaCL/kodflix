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
              <div className="titleMovie"><h1 >Black Mirror</h1></div>
            </div>
            <div className='item'>
              <img src={breakingBad} alt="breaking bad cover"/>
              <h1 className='titleMovie'> Breaking Bad</h1>  
            </div>
            <div className='item'>
              <img src={deathNote} alt="death note cover"/>
              <h1 className='titleMovie'>Death Note</h1>  
            </div>
          </div>
          <div className='container' >
            <div className='item'>
              <img src={gameOfThrones} alt="game of thrones cover"/>
              <h1 className='titleMovie'> Game of Thrones</h1>  
            </div>
            <div className='item'>
              <img src={walkingDead} alt="walking dead cover"/>
              <h1 className='titleMovie'> Walking Dead</h1>  
            </div>
            <div className='item'>
              <img src={theWire} alt="the wire cover"/>
              <h1 className='titleMovie'>Wonder Woman</h1>  
            </div>
          </div>
      </div>
    );
  }
}

export default App;

