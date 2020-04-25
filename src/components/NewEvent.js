import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FirebaseContext } from './Firebase';
import NavBar from './NavBar'

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
};

function handleDeleteInput(e, handleDelete, idx) {
    e.preventDefault();
    handleDelete(idx);
}

function EmailList(props) {
    return (
        props.emails.map((email, idx) => {
            return (
                <div className="emailListWrapper">
                    <div className="emailList" style={{marginRight: '40px'}}>
                        <p>{email}</p>
                    </div>
                    <button className="deleteEmail" onClick={(e) => handleDeleteInput(e, props.handleDelete, idx)}>
                        x
                    </button>
                </div>
            )
        })
    );
}

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            location: "",
            description: "",
            emails: [],
            currentEmail: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleDeleteEmail = (idx) => {
        var array = [...this.state.emails];
        array.splice(idx, 1);
        if(idx !== -1) {
            this.setState({
                emails: array
            });
        }
        console.log(this.state.emails);
    }

    addEmail = (e) => {
        e.preventDefault();
        console.log(this.state.currentEmail);
        var joined = this.state.emails.concat(this.state.currentEmail);
        this.setState({
            emails: joined
        }, () => {
            this.setState({
                currentEmail: ""
            });
            console.log(this.state.emails);
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var event = {
            eventName: this.state.eventName,
            location: this.state.location,
            description: this.state.description,
            emails: this.state.emails
        }
        this.props.firebase.addEvent(event);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
                    <div className="newEvent">
                        <h1 className="text-black text-4xl font-semibold">Create New Event</h1>
                        <form className="mt-8 mb-8">
                            <h3 className="text-black text-xl mb-6 font-medium">Fill out event information</h3>
                            <div className="mb-4 w-1/3">
                                <label className="block text-gray-700">Event Name</label>
                                <input name="eventName" value={this.state.eventName} onChange={this.handleChange} className="w-full block border-gray-500 border rounded p-2 bg-gray-200" type="text" placeholder="Eg. Picnic"></input>
                            </div>
                            <div className="mb-4 w-1/3">
                                <label className="block text-gray-700">Location</label>
                                <input name="location" value={this.state.location} onChange={this.handleChange} className="w-full block border-gray-500 border rounded p-2 bg-gray-200" type="text" placeholder="Eg. 3584 S. Figueroa St."></input>
                            </div>
                            <div className="mb-4 w-1/3">
                                <label className="block text-gray-700">Description</label>
                                <input name="description" value={this.state.description} onChange={this.handleChange} className="w-full block border-gray-500 border rounded p-2 bg-gray-200" type="text" placeholder="Eg. A picnic to start the year and welcome new employees"></input>
                            </div>
                            <div className="w-1/3">
                                <h3 className="text-black text-xl mb-6 font-medium">Invite people to your event</h3>
                                <EmailList emails={this.state.emails} handleDelete={this.handleDeleteEmail}/>
                                <input className="mt-4 block border-gray-500 border rounded p-2 bg-gray-200 inline-block" type="text" name="currentEmail" onChange={this.handleChange} value={this.state.currentEmail} placeholder="Add email"></input>
                                <button className="inline-block ml-4" onClick={this.addEmail}>+</button>
                            </div>
                        </form>
                        <button onClick={this.handleSubmit} type="submit" class="text-white font-semibold text-lg p-3 rounded-lg" style={{backgroundColor: "#4845F0"}}>Create Event</button>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default class NewEventWrapper extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <NewEvent firebase={firebase} />}
            </FirebaseContext.Consumer>
        );
    }
}