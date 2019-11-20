import React, { Component } from 'react';

import classes from './Personal.module.css';
import MainContent from '../../components/MainContent/MainContent';
import ProfilePicture from '../../assets/images/_MG_2270_result.jpg';

class Personal extends Component {
    render() {
        return (
            <MainContent title="Personal">
                <div className={classes.Description}>
                    <div className={classes.ProfilePicture}>
                        <img src={ProfilePicture} className={classes.Responsive} alt="Profile" />
                    </div>
                    <div className={classes.Polygon}>
                        <div className={classes.PersonalDescriptionContainer}>
                            <h1>Personal</h1>
                        </div>
                    </div>
                </div>
            </MainContent>
        );
    }
}

export default Personal;