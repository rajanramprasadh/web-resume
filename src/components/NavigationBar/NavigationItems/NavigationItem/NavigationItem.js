import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.MainNavItem}>
        <NavLink to={props.link}>{props.children}</NavLink>
    </li>
);

export default navigationItem;