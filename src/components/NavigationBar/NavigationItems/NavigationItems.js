import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/Auxilliary/Axilliary';

const navigationItems = () => (
    <Aux>
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/personal">Personal</NavigationItem>
            <NavigationItem link="/education">Education</NavigationItem>
            <NavigationItem link="/skill">Skill</NavigationItem>
            <NavigationItem link="/internship">Internship</NavigationItem>
            <NavigationItem link="/work-history">Work History</NavigationItem>
            <NavigationItem link="/hobbies">Hobbies</NavigationItem>
        </ul>
    </Aux>
);

export default navigationItems;