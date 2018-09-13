import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent'
import Char from './CharComponent/CharComponent';

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangeHanlder = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {

    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char
        character={char}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text"
          onChange={this.inputChangeHanlder}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
