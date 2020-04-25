import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import EventCell from './EventCell'
import NavBar from './NavBar';

class Home extends Component {
    //    ref.child("products").orderByChild('author').equalTo(12345)

    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount = () => {
        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in.
              const eventsRef = this.props.firebase.database.ref('events').orderByChild('createdBy').equalTo(user.uid);
              eventsRef.on('value', snap => {
                  // console.log(snap.val());
                  snap.forEach((childSnapshot) => {
                      var childData = childSnapshot.val();
                      var joined = this.state.events.concat(childData);
                      this.setState({
                          events: joined
                      });
      
                  });
                  console.log(this.state.events);
                  console.log(this.props.firebase.getCurrentUser());
              });
            } else {
              // No user is signed in.
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <div className="home">
                        <div className="home-topbar">
                            <h1>My Events</h1>
                            <a className="createEvent" href="/newEvent">Create Event</a>
                        </div>
                        <div className="eventList">
                            {this.state.events.map((event) => (
                                <EventCell event={event} />
                            ))}
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;
