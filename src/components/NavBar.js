import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
                    <Navbar.Brand href="#home">Calendar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#profile">
                                Dashboard
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavBar;