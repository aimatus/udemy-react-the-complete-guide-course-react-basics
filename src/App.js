import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Aby', age: 25 },
      { name: 'Abe', age: 28 },
      { name: 'Yiz', age: 24 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Abigail', age: 25 },
        { name: newName, age: 28 },
        { name: 'Yiz', age: 24 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Abigail', age: 25 },
        { name: event.target.value, age: 28 },
        { name: 'Yiz', age: 24 }
      ]
    });
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
        <button onClick={() => this.switchNameHandler('Bram')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Ilych')}
          changed={this.nameChangeHandler}>
          My hobbies: playing guitar
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
