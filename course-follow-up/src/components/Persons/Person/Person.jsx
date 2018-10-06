import React, { Component } from 'react'
import cssClasees from './Person.css';

class Person extends Component {
    render() {
        return (
            <div className={cssClasees.Person} >
                <p onClick={this.props.click}>I'm {this.props.name}  and I'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;