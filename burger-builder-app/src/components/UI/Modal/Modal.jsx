import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {
    const modalDynamicStyle = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };

    return (
        <div
            className={classes.Modal}
            style={modalDynamicStyle}>
            {props.children}
        </div>
    );
};

export default modal;