import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import cssClasses from './App.css';

class App extends Component {

  state = {
    persons: [
      { id: 'sdfsdf', name: 'Aby', age: 25 },
      { id: 'fghfgh', name: 'Abe', age: 28 },
      { id: '23dasd', name: 'Yiz', age: 24 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => { return person.id === id; }
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      )
    }

    return (
      <div className={cssClasses.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHalder} />
        {persons}
      </div>
    );
  }
}

export default App;
