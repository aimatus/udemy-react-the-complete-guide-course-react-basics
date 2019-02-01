import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        const modalDynamicStyle = {
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        };

        return (
            <>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={modalDynamicStyle}>
                    {this.props.children}
                </div>
            </>
        )
    }
};

export default Modal;