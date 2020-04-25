import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

/**
 * The code in this file was referenced from the following website:
 * https://www.npmjs.com/package/react-google-calendar-api
 */

export default class Google extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

     handleItemClick(event, name) {
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
            window.location.href='/login';
        }
    }

    render() {
        return (
            <button onClick={(e) => this.handleItemClick(e, 'sign-in')}>
                Sign in with Google
            </button>
        );
    }
}
