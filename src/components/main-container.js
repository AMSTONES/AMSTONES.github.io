import React, { Component } from 'react';
import AboutMe from './about-me';

class MainContainer extends Component {

    render() {
        return (
            <div className="main-container">
                <AboutMe/>
                <AboutMe/>
            </div>
        )
    }
}

export default MainContainer
