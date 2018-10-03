import React from 'react'
import cssClasees from './Person.css';

const person = (props) => {
    return (
        <div className={cssClasees.Person}>
            <p onClick={props.click}>I'm {props.name}  and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;