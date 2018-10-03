import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Persons from '../components/Persons/Persons'
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
    let buttonClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      )
      buttonClass = cssClasses.Red;
    }

    const classes = [];

    if (this.state.persons.length < 3) {
      classes.push(cssClasses.red);
    }
    if (this.state.persons.length < 2) {
      classes.push(cssClasses.bold);
    }

    return (
      <div className={cssClasses.App}>
        <header className={cssClasses['App-header']}>
          <img src={logo} className={cssClasses['App-logo']} alt="logo" />
          <h1 className={cssClasses['App-title']}>React, the Complete Guide</h1>
        </header>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={buttonClass}
          onClick={this.togglePersonsHalder}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
