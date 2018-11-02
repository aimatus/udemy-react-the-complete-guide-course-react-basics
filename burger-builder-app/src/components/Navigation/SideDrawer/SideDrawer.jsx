import React from 'react';
import Logo from '../../Logo/Logo';
import NavidationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavidationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;