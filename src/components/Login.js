import React from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function Login() {

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
                    <ButtonGroup class="btn-toolbar" size="sm" vertical="true">
                        <Button onClick={event =>  window.location.href='/register'} variant="primary">Register</Button>{' '}
                        <Button onClick={event =>  window.location.href='/help'} variant="secondary">Forgot Password?</Button>{' '}
                    </ButtonGroup>

                    <span className="btn-group-2">
                        <Button onClick={event =>  window.location.href='/calendarCreator'} size="lg" variant="primary">Guest</Button>{' '}
                        <Button onClick={event =>  window.location.href='/home'}size="lg" variant="primary">Login</Button>{' '}
                    </span>

                </div>
            </div>
        </Container>

    );
}
