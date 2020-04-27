import React from 'react';
import NavBar from './NavBar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { withRouter } from "react-router-dom";
import FreeBusy from './FreeBusy'; 

const localizer = momentLocalizer(moment);

class CalendarCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            startDate: "",
            endDate: "",
            location: "",
            itinerary: "",
            description: "", 
            events: []
        }
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        //Fetch firebase data
        this.fetchEvent();
    }

    fetchEvent = () => {
        const eventsRef = this.props.firebase.database.ref('events');
        eventsRef.on('value', snap => {
            //console.log(snap.val());
            snap.forEach((childSnapshot) => {
                var childData = childSnapshot.val();
                var key = childSnapshot.key;
                if(key === this.id) {
                    //console.log(childData);
                    this.setState({
                        eventName: childData.eventName,
                        startDate: childData.startDate,
                        endDate: childData.endDate,
                        itinerary: childData.itinerary || "",
                        location: childData.location,
                        description: childData.description
                    });

                // const user = this.props.firebase.getCurrentUser(); 
                // console.log("email: " + user.getProviderData().getEmail()); 

                if(childData.busyEvents) {
                      Object.keys(childData.busyEvents).forEach( (value) => {     
                          var set = childData.busyEvents[value]; 
                          set.map( (event) => {
                              var e = {
                                start: moment(event.start).toDate(), 
                                end: moment(event.end).toDate(), 
                                title: "BUSY"
                              }
                              this.setState({
                                events: [...this.state.events, e]
                              }); 
                          }); 
                      });
                    }
                }
            });
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
                <NavBar/>
                <div className="flex mb-4 h-screen">
                    <div className="w-1/4 p-4">
                        <FreeBusy eventId={this.id} firebase={this.props.firebase}/>
                        <h1 className="font-bold text-2xl mb-4">Available Meeting Times</h1>
                        <form>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700">Event Name</label>
                                <input name="eventName" value={this.state.eventName} onChange={this.handleChange} className="w-full block border-gray-500 border rounded p-2 bg-gray-200" type="text" placeholder="Eg. Picnic"></input>
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700">Description</label>
                                <input name="description" value={this.state.description} onChange={this.handleChange} className="w-full block border-gray-500 border rounded p-2 bg-gray-200" type="text" placeholder="Eg. A picnic to start the year and welcome new employees"></input>
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700">Location</label>
                                <input name="location" value={this.state.location} onChange={this.handleChange} className="w-full block border-gray-500 border rounded p-2 bg-gray-200" type="text" placeholder="Eg. Picnic"></input>
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700">Start Date</label>
                                <input name="startDate" value={this.state.startDate} onChange={this.handleChange} className="w-full block border-gray-500 border rounded p-2 bg-gray-200" type="text" placeholder="Eg. Picnic"></input>
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700">End Date</label>
                                <input name="endDate" value={this.state.endDate} onChange={this.handleChange} className="w-full block border-gray-500 border rounded p-2 bg-gray-200" type="text" placeholder="Eg. Picnic"></input>
                            </div>
                            <label className="block text-gray-700">Itinerary</label>
                            <textarea className="w-full mb-4 p-2 h-40 bg-gray-200" value={this.state.itinerary} placeholder="Eg. Meeting notes, agenda, rough timeline of event etc." name="itinerary" onChange={this.handleChange}></textarea>
                        </form>
                        <button type="submit" className="text-white font-semibold text-lg p-3 rounded-lg" style={{backgroundColor: "#4845F0"}}>Save</button>
                    </div>
                    <div className="w-3/4">
                        <Calendar
                            localizer={localizer}
                            events={this.state.events}
                            startAccessor="start"
                            endAccessor="end"
                            defaultView={'week'}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default withRouter(CalendarCreator);