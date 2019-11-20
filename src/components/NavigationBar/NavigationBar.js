import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationBar.module.css';
import NavigationItems from '../NavigationBar/NavigationItems/NavigationItems';

const navigationBar = (props) => (
    <header className={classes.MainHeader}>
        <nav className={classes.MainNav}>
            <div className={classes.MainNavFlexContainer}>
                <div className={classes.BrandLogo}>
                    <NavLink className={classes.MainNavBrand} to="/personal">Ram Prasadh Varadharajan</NavLink>
                </div>
                <div className={classes.MainNavMenu}>
                    <NavigationItems />
                </div>
            </div>
        </nav>
    </header>
);

export default navigationBar;