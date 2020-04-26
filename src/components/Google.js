import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import Button from "react-bootstrap/Button";

export default class Google extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: ApiCalendar.sign,
            gapi: ApiCalendar.gapi
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.signUpdate = this.signUpdate.bind(this);
        ApiCalendar.onLoad(() => {
            ApiCalendar.listenSign(this.signUpdate);
        });
    }

     handleItemClick(event, name) {
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
            window.location.href='/calendarCreator';
        }
    }

    signUpdate(sign) {
        this.setState({
            sign
        })
    }

    render() {
        return (
            <div class="google-Page">
                <div >
                    Please Sign-In with Google to
                    <br/><br/><br/>
                    Provide Us Access to your Google Calendar!
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Button size="lg" variant="primary" onClick={(e) => this.handleItemClick(e, 'sign-in')} >
                        Sign in with Google
                    </Button>
                </div>
            </div>
        );
    }
}
