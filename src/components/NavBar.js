import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { withFirebase } from './Firebase/context'

function NavLinks(props) {
    if(props.loggedIn) {
        return (
            <React.Fragment>
                <Nav.Link eventKey={2} href="/">
                    Dashboard
                </Nav.Link>
                <Nav.Link eventKey={2}>
                    <button style={{background: "none", border: "none", outline: "none", color: "white"}} onClick={() => props.firebase.doSignOut()} >
                        Sign Out
                    </button> 
                </Nav.Link>
            </React.Fragment>
        );
    }
    else {
        return (
            <React.Fragment>
                <Nav.Link eventKey={2} href="/login">
                    Login
                </Nav.Link>
                <Nav.Link eventKey={2} href="/register">
                    Register
                </Nav.Link>
            </React.Fragment>
        );
    }
}

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
                    <Navbar.Brand href="/">Calendar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <NavLinks loggedIn={this.props.firebase.authenticatedUser} firebase={this.props.firebase}/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

const NavBarWithContext = withFirebase(NavBar);

export default NavBarWithContext;