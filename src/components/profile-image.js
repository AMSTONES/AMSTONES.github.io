import React, { Component } from 'react';

class ProfileImage extends Component {
    render() {
        return (
            <div className="profile-image">
                <img className="profile-image__portrait" src="images/ams-hex.png"/>
                <h2 className="profile-image__caption">Alexander Stones</h2>
            </div>
        )
    }
}

export default ProfileImage
