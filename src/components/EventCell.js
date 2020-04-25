import React from 'react';
const moment = require('moment');

function EventCell(props) {
    console.log(props);
    var event = props.event;
    var createdAt = moment(event.createdAt).format('MM/DD/YYYY');
    return (
        <div className="event">
            <h2>{event.eventName}</h2>
            <p className="createdAt">Created at: {createdAt}</p>
            <div className="event-bottom">
                <p>{event.emails ? event.emails.length : 0} participant(s)</p>
                <button>
                    Edit
                </button>
                <button>
                    Info
                </button>
            </div>
        </div>
    );
}

export default EventCell;