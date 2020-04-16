import React from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function Login() {
    const submitEventHandler = {
        //validates the login info
        //if login validated
        //route to home page
        //else show an error
    }

    const guestEventHandler = {
        //route to limited guest page
    }

    const registerEventHandler = {
        //takes them to registration page
    }

    const forgotPasswordEventHandler = {
        // route to new page for forgot password
        // this page needs title, input for email, and submit button
        // submit button will call mailgun API to the guest's email
        // direct guest to check their email for further instructions
        // button for back to login page
    }
    return (
        <Container>
            <div className="login">
                <div className="login-header">
                    GCal Sync
                </div>
                <div className="login-input-label">
                    <label htmlFor="username">Username &nbsp;</label>
                 </div>
                <div className="login-input">
                    <input className="login-info" required={true} id="username"/>
                </div>
                <div className="login-input-label">
                    <label htmlFor="password">Password &nbsp;</label>
                </div>
                <div className="login-input">
                    <input className="login-info" required={true} id="password"/>
                </div>
                <div className="login-buttons">
                    <ButtonGroup class="btn-toolbar"  size="sm" vertical="true">
                        <Button variant="primary">Register</Button>{' '}
                        <Button variant="primary">Forgot Password?</Button>{' '}
                    </ButtonGroup>
                    <span className="btn-group-2">
                    <Button size="lg" variant="primary">Guest</Button>{' '}
                    <Button size="lg" variant="primary">Login</Button>{' '}
                    </span>
                </div>
            </div>
        </Container>

    );
}
