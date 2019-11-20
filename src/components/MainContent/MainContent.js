import React from 'react';

import classes from './MainContent.module.css';


const mainContent = (props) => {
    return (
        <div className={classes.MainContentContainer}>
            {props.children}
        </div>
    );
}

export default mainContent;