import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Kodflix</h1>
        <Gallery ></Gallery>
      </div>
    );
  }
}

export default App;