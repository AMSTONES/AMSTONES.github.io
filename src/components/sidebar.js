import React, { Component } from 'react';
import ProfileImage from './profile-image';

class Sidebar extends Component {
    render () {
        return (
            <div className="sidebar">
                <ProfileImage/>
            </div>
        )
    }
}

export default Sidebar
