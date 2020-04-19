import React from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function Register() {
    return (
        <Container>
            <div className="login">
                <div className="login-header">
                    GCal Sync
                </div>

                <div className="login-input-label">
                    <label htmlFor="email">Email &nbsp;</label>
                </div>

                <div className="login-input">
                    <input className="login-info" required={true} id="email"/>
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
                    <Button onClick={event =>  window.location.href='/home'}size="lg" variant="primary">Sign up!</Button>{' '}
                    <br/>
                </div>
                <div className="back-to-login">
                    <Button onClick={event =>  window.location.href='/login'}size="sm" variant="secondary">&lt; Back to login</Button>{' '}
                </div>
            </div>
        </Container>

    );
}
