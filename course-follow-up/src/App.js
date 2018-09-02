import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons: [
      { id: 'sdfsdf', name: 'Aby', age: 25 },
      { id: 'fghfgh', name: 'Abe', age: 28 },
      { id: '23dasd', name: 'Yiz', age: 24 }
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
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
