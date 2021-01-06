import React, { Component } from 'react';
// import NavbarLink from './navbar-link';
import {Navbar, Nav} from 'react-bootstrap'
class Navigation extends Component {
    render() {
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">About me</Nav.Link>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                                <Nav.Link href="#cv">CV</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default Navigation
