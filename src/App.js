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
            <div className='item' >
              <img  src={blackMirror} alt="black mirror cover"/>
              <h1 className="myH1Style">Black Mirror</h1>
            </div>
            <div className='item'>
              <img src={breakingBad} alt="breaking bad cover"/>
              <h1 className='myH1Style'> Breaking Bad</h1>  
            </div>
            <div className='item'>
              <img src={deathNote} alt="death note cover"/>
              <h1 className='myH1Style'>Death Note</h1>  
            </div>
          </div>
          <div className='container' >
            <div className='item'>
              <img src={gameOfThrones} alt="game of thrones cover"/>
              <h1 className='myH1Style'> Game of Thrones</h1>  
            </div>
            <div className='item'>
              <img src={walkingDead} alt="walking dead cover"/>
              <h1 className='myH1Style'> Walking Dead</h1>  
            </div>
            <div className='item'>
              <img src={theWire} alt="the wire cover"/>
              <h1 className='myH1Style'>The wire</h1>  
            </div>
          </div>
      </div>
    );
  }
}

export default App;

