import React, { Component } from 'react';
import Stack from "./Stack";
import image from './covers/mib.jpg';
import blackMirror from './covers/bmcover.jpg';
import breakingBad from './covers/bbcover.jpg';
import deathNote from './covers/dncover.jpg';
import gameOfThrones from './covers/gotcover.png';
import wonderWoman from './covers/wwcover.jpg';
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
            <Stack name="Black Mirror" source={blackMirror} title="black mirror cover"></Stack>
            <Stack name="Breaking Bad" source={breakingBad} title="breaking bad cover"></Stack>
            <Stack name="Death Note" source={deathNote} title="death note cover"></Stack>
          </div>
          <div className='container' >
            <Stack name="Game of Thrones" source={gameOfThrones} title="game of thrones cover"></Stack>
            <Stack name="Walking Dead" source={walkingDead} title="walking dead cover"></Stack>
            <Stack name="Wonder Woman" source={wonderWoman} title="wonder woman cover"></Stack>
          </div>
      </div>
    );
  }
}

export default App;