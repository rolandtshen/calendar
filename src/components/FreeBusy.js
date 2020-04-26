import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { FirebaseContext } from './Firebase';

export default class FreeBusy extends React.Component {
    constructor(props) {
        super(props);
        this.gapi = ApiCalendar.gapi;
        this.getCalendars = this.getCalendars.bind(this);
        this.addCalendar = this.addCalendar.bind(this); 
        this.getEvents = this.getEvents.bind(this); 
        this.saveToFirebase = this.saveToFirebase.bind(this); 
        this.state = {
          calendarList : [],
          eventsList: [], 
          eventId: ""
        }; 
    }

    saveToFirebase() {
      this.props.firebase.saveBusyEvents(this.state.eventId, this.state.eventsList); 
      // const eventRef = firebase.database.ref('events').orderByChild("id").equalTo("-M5kSRn_2aPhuLkaamB6");
      // var newEventRef = eventRef.busyEvents.push(); 
      // newEventRef.set({
      //     4 : eventsList
      // }); 
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
                "timeMin": "2020-04-24T21:00:31-00:00",
                "timeMax": "2020-04-29T21:00:31-00:00",
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
          this.saveToFirebase(); 
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
            <button onClick={this.addCalendar}>
                Add Calendar
            </button>
            <br/>
            <div> hii </div>
          </div> 
        );
    }



}