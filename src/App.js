import React, { Component } from 'react';
import image from './mib.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Kodflix</h1>
        <img src={image} alt="first cover"/>
      </div>
    );
  }
}

export default App;
