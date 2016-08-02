import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import DataWidget from '../DataWidget/data-widget'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to <span className="App-name">TickrTrackr</span></h2>
        </div>
        <div className="App-main-window">
          <DataWidget title="Speed" data="25" type="mph"/>
          <DataWidget title="Cadence" data="82" type="rpm"/>
          <DataWidget title="Heart Rate" data="135" type="bpm"/>
          <DataWidget title="Distance" data="45.75" type="miles"/>
        </div>

      </div>
    );
  }
}

export default App;
