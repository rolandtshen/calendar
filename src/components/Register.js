import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FirebaseContext } from './Firebase';
import NavBar from './NavBar';


const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
};

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password);
            // .then(authUser => {
            //     this.setState({ ...INITIAL_STATE });
            //     console.log("registered");
            //     console.log(authUser);
            //     alert("registered");
            //     window.location.href='/login';

            // })
            // .catch(error => {
            //     alert(error);
            //     this.setState({ error });
            // });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <div className="login">
                        <div className="login-header">
                            GCal Sync
                        </div>

                        <div className="login-input-label">
                            <label htmlFor="email">Email &nbsp;</label>
                        </div>

                        <div className="login-input">
                            <input name="email" onChange={this.handleChange} value={this.state.email} className="login-info" required={true} id="email"/>
                        </div>

                        <div className="login-input-label">
                            <label htmlFor="username">Username &nbsp;</label>
                        </div>

                        <div className="login-input">
                            <input name="username" onChange={this.handleChange} value={this.state.username} className="login-info" required={true} id="username"/>
                        </div>

                        <div className="login-input-label">
                            <label htmlFor="password">Password &nbsp;</label>
                        </div>

                        <div className="login-input">
                            <input className="login-info" name="password" onChange={this.handleChange} value={this.state.password} required={true} id="password"/>
                        </div>

                        <div className="login-buttons">
                            <Button onClick={this.handleSubmit}size="lg" variant="primary">Sign up!</Button>{' '}

                        </div>
                        <div className="back-to-login">
                            <Button onClick={event =>  window.location.href='/login'}size="sm" variant="secondary">&lt; Back to login</Button>{' '}
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default class Register extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <RegisterForm firebase={firebase} />}
            </FirebaseContext.Consumer>
        );
    }
}