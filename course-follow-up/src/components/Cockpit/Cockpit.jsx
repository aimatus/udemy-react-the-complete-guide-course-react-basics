import React from 'react';
import cssClasses from '../../containers/App.css';
import cockpitClasses from './Cockpit.css';
import logo from '../../assets/logo.svg';

const cockpit = (props) => {

    const classes = [];
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = cssClasses.Red;
    }
    if (props.persons.length < 3) {
      classes.push(cockpitClasses.red);
    }
    if (props.persons.length < 2) {
      classes.push(cockpitClasses.bold);
    }

    return (
        <div className={cockpitClasses.Cockpit}>
            <header className={cssClasses['App-header']}>
                <img src={logo} className={cssClasses['App-logo']} alt="logo" />
                <h1 className={cssClasses['App-title']}>React, the Complete Guide</h1>
            </header>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;