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
    ],
    showPersons: false
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

  togglePersonsHalder = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React, the Complete Guide</h1>
        </header>
        <button
          style={style}
          onClick={this.togglePersonsHalder}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
