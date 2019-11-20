import React, { Component } from 'react';

import Aux from '../Auxilliary/Axilliary';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <NavigationBar />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    }
}

export default Layout;

