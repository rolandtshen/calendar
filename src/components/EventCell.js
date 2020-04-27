import React from 'react';
const moment = require('moment');

function EventCell(props) {
    console.log(props);
    var event = props.event;
    var id = props.id;
    var createdAt = moment(event.createdAt).format('MM/DD/YYYY');
    return (
        <a href={`/calendar/${id}`} className="eventWrapper">
            <div className="event">
                <h2 className="eventName">{event.eventName}</h2>
                <p>Description: {event.description}</p>
                <p>Location: {event.location}</p>
                <p className="createdAt">Created at: {createdAt}</p>
                <div className="event-bottom">
                    <p>{event.emails ? event.emails.length : 0} participant(s)</p>
                    <button>→</button>
                </div>
            </div>
        </a>
    );
}

export default EventCell;