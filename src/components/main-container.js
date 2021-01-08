import React, { Component } from 'react';
import AboutMe from './about-me';

class MainContainer extends Component {
    render() {
        const displaySet = (input) => {
            switch (input) {
                case "AboutMe":
                    <AboutMe/>;
                    break;
                default:
                    break;
            }
        }
        return (
            <div className="main-container">
                <AboutMe/>
            </div>
        )
    }
}

export default MainContainer
