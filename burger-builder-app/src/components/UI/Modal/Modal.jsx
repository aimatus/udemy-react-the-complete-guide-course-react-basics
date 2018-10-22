import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
    const modalDynamicStyle = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };

    return (
        <>
            <Backdrop
                show={props.show}
                clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={modalDynamicStyle}>
                {props.children}
            </div>
        </>
    );
};

export default modal;