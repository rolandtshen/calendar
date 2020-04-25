import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FirebaseContext } from './Firebase';
import NavBar from './NavBar';

const INITIAL_STATE = {
    email: '',
    password: ''
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                //alert("logged in");
                window.location.href='/';
            })
            .catch(error => {
                alert(error);
                this.setState({ error });
            });
        event.preventDefault();
    };
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container>
                    <div className="login">
                        <div className="login-header">
                            GCal Sync
                        </div>

                        <div className="login-input-label">
                            <label htmlFor="username">Email &nbsp;</label>
                        </div>

                        <div className="login-input">
                            <input className="login-info" name="email" value={this.state.email} onChange={this.handleChange} required={true} id="username"/>
                        </div>

                        <div className="login-input-label">
                            <label htmlFor="password">Password &nbsp;</label>
                        </div>
                        <div className="login-input">
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="login-info" required={true} id="password"/>
                        </div>

                        <div className="login-buttons">


                            <span className="btn-group-2">
                                <Button onClick={event =>  window.location.href='/register'} size="lg" variant="primary">Register</Button>{' '}
                                <Button onClick={event =>  window.location.href='/home'} size="lg" variant="primary">Guest</Button>{' '}
                                <Button onClick={this.onSubmit}size="lg" variant="primary">Login</Button>{' '}
                            </span>

                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default class Login extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <LoginForm firebase={firebase} />}
            </FirebaseContext.Consumer>
        );
    }

    // const forgotPasswordEventHandler = {
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
    // }
}