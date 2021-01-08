import React, { Component } from 'react';

class NavbarLink extends Component {

    render() {
        return (
            <li className="nav-item">
                <a className="nav-link">
                    {this.props.linkName}
                </a>
            </li>

        )
    }
}

export default NavbarLink
