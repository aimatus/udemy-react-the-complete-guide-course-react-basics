import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    username: '@aimatus'
  }

  usernameChangeHandler = (event) => {
    this.setState({
        username: event.target.value
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React, the Complete Guide: Assignment #1</h1>
          <h1 className="App-title">github.com/aimatus</h1>
        </header>
        <div className="Assignment">
          <UserInput changed={this.usernameChangeHandler.bind(this)}/>
          <UserOutput username={this.state.username}/>
          <UserOutput />
          <UserOutput />
        </div>
      </div>
    );
  }
}

export default App;
