import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

export default class FreeBusy extends React.Component {
    constructor(props) {
        super(props);
        this.gapi = ApiCalendar.gapi;
        this.getCalendars = this.getCalendars.bind(this);
        this.addCalendar = this.addCalendar.bind(this); 
        this.getEvents = this.getEvents.bind(this); 
        this.state = {
          calendarList : [],
          eventsList: [], 
          eventId: ""
        }; 
    }

    getCalendars() { 
      var listString = "["; 
      return ApiCalendar.gapi.client.calendar.calendarList.list({
        "minAccessRole": "writer",
        "showDeleted": false,
        "showHidden": true
      })
      .then(response => {
        response.result.items.map( (cal) => {
          const id = "{ 'id'  : " + cal.id + " },"; 
          listString += id; 
          this.setState({
            calendarList: [...this.state.calendarList, cal.id]
          });
        }); 
        listString += "]"; 
        this.getEvents(listString); 
      }, 
      function(err) {
        console.error("Execute error", err);
      });
    }   

    getEvents(listString) {
        var json = JSON.parse(listString); 
        return ApiCalendar.gapi.client.calendar.freebusy.query({
              "resource": {
                "timeMin": "2020-04-24T21:00:31-00:00",
                "timeMax": "2020-04-29T21:00:31-00:00",
                "timeZone": "America/Los_Angeles",
                "items": json
              }
            })
        .then( response => {
            // Handle the results here (response.result has the parsed body).
            console.log("omfg", response);
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
            <div> hii {this.state.calendarList}</div>
          </div> 
        );
    }



}