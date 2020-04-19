import React from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function Login() {

    const forgotPasswordEventHandler = {
        // route to new page for forgot password
        // this page needs title, input for email, and submit button
        // submit button will call mailgun API to the guest's email
        // direct guest to check their email for further instructions
        // button for back to login page
        // https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page/50645395
        // import { useHistory } from 'react-router-dom';
        // const App = () => {
        //    const history = useHistory()
        //    <i className="icon list arrow left"
        //       onClick={() => {
        //         history.goBack()
        //    }}></i>
        // }
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
                    <ButtonGroup class="btn-toolbar" size="sm" vertical="true">
                        <Button onClick={event =>  window.location.href='/register'} variant="primary">Register</Button>{' '}
                        <Button variant="secondary">Forgot Password?</Button>{' '}
                    </ButtonGroup>

                    <span className="btn-group-2">
                        <Button onClick={event =>  window.location.href='/home'} size="lg" variant="primary">Guest</Button>{' '}
                        <Button onClick={event =>  window.location.href='/home'}size="lg" variant="primary">Login</Button>{' '}
                    </span>

                </div>
            </div>
        </Container>

    );
}
