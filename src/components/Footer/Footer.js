import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css'

const footer = () => {
    return (
        <footer className={classes.MainFooter}>
            <ul className={classes.MainFooterItems}>
                <li className={classes.MainFooterItem}>
                    <NavLink to="/contact-me">Contact Me</NavLink>
                </li>
            </ul>
        </footer>
    );
}

export default footer;