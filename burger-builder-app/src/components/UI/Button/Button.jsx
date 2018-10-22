import react from 'react';
import classes from './Button.module.css';

const button = (props) => {
    <button
        className={[classes.Button, classes[props.buttonType]].join(' ')}
        onClick={props.click}>{props.children}</button>
}

export default button;