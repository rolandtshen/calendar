import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { FirebaseContext } from './Firebase';
import moment from "moment"; 

export default class FreeBusy extends React.Component {
    constructor(props) {
        super(props);
        this.gapi = ApiCalendar.gapi;
        this.getCalendars = this.getCalendars.bind(this);
        this.addCalendar = this.addCalendar.bind(this); 
        this.getEvents = this.getEvents.bind(this); 
        this.saveBusyEvents = this.saveBusyEvents.bind(this); 
        this.state = {
          calendarList : [],
          eventsList: [], 
          eventId: this.props.eventId, 
          min: "",
          max: ""
        }; 
    }

    componentDidMount() {
     this.props.firebase.database.ref('/events/' + this.state.eventId).once('value')
     .then(snapshot => {
        this.setState({
          min: snapshot.val().startDate, 
          max: snapshot.val().endDate
        })
     }); 
    }

    saveBusyEvents() {
      const eventRef = this.props.firebase.database.ref('events/' + this.state.eventId + '/busyEvents'); 
      eventRef.push(this.state.eventsList); 
    }


    getCalendars() { 
      return ApiCalendar.gapi.client.calendar.calendarList.list({
        "minAccessRole": "writer",
        "showDeleted": false,
        "showHidden": true
      })
      .then(response => {
        response.result.items.map( (cal) => {
          const id = { 'id' : cal.id }; 
          this.setState({
            calendarList: [...this.state.calendarList, id]
          });
        }); 
        this.getEvents(); 
      }, 
      function(err) {
        console.error("Execute error", err);
      });
    }   

    getEvents() {
      return ApiCalendar.gapi.client.calendar.freebusy.query({
            "resource": {
              "timeMin": moment(this.state.min).toISOString(),
              "timeMax": moment(this.state.max).toISOString(),
              "timeZone": "America/Los_Angeles",
              "items": this.state.calendarList
            }
          })
      .then(response => {
        var calendars = response.result.calendars;
        Object.keys(calendars).forEach( (value, key) => {
          var busy = calendars[value].busy; 
            busy.map( (event) => {
                this.setState({
                  eventsList: [...this.state.eventsList, event]
                }); 
            }); 
        });
        this.saveBusyEvents();
      },
    function(err) { console.error("Execute error", err); });
  }


   addCalendar() {
      //get permissions

      if(!ApiCalendar.sign) {
          ApiCalendar.handleAuthClick();
      }

      //get list of user's calendars
      this.getCalendars(); 
    }

    render() {
        return (
          <div>
            <button style={{backgroundColor: "#4845F0" , color: "white", borderRadius: "5px", padding: "1em", margin: "10px", fontWeight: "600"}} onClick={this.addCalendar}>
                Add Calendar
            </button>
          </div> 
        );
    }



}