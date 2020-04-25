import React from 'react';
import { Container } from 'react-bootstrap'
import EventCell from './EventCell'
import InviteMembers from './InviteMembers'

function Home() {
    return (
        <Container>
            <div className="home">
                <div className="home-topbar">
                    <h1>My Events</h1>
                    <button className="createEvent">Create Event</button>
                </div>
                <div className="eventList">
                    <EventCell />
                    <EventCell />
                    <EventCell />
                    <EventCell />
                    <EventCell />
                    <EventCell />
                </div>
            </div>
            <div> 
                <InviteMembers /> 
            </div> 
        </Container>
    );
}

export default Home;
