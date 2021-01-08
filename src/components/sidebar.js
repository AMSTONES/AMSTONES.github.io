import React, { Component } from 'react';
import ContactButton from './contact-button';
// import ProfileImage from './profile-image';
class Sidebar extends Component {
    render () {
        return (
                <div className="sidebar">
                            <img className="profile-image__portrait" src="images/ams-hex.png" />
                            <h2 className="profile-image__caption">Alexander Stones</h2>
                        <div className="sidebar__skills-container">
                            <ul className="sidebar__skills-list">
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                                <li>JavaScript/jQuery</li>
                                <li>WordPress</li>
                                <li>PHP</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <ContactButton />
                </div>

        )
    }
}

export default Sidebar
