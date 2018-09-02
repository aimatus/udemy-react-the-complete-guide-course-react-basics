import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    username: '@aimatus'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Assignment">
          <UserOutput username={this.state.username}/>
          <UserOutput />
          <UserOutput />
        </div>
      </div>
    );
  }
}

export default App;
