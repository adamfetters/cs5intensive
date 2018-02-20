import React, { Component } from 'react';
import FirstFunctional from './components/FirstFunctional';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>CS5 Intesive React Workout</h1>
        </div>
        <FirstFunctional />
      </div>
    );
  }
}

export default App;
