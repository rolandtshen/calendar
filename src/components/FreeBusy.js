import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

export default class FreeBusy extends React.Component {
    constructor(props) {
        super(props);
        this.gapi = ApiCalendar.gapi;
        this.getCalendars = this.getCalendars.bind(this);
        this.addCalendar = this.addCalendar.bind(this); 
        this.queryFreeBusy = this.queryFreeBusy.bind(this); 
        this.state = {
          calendarList : [],
          eventsList: [], 
          eventId: ""
        }; 
    }

    getCalendars() {
      return ApiCalendar.gapi.client.calendar.calendarList.list({
        "minAccessRole": "writer",
        "showDeleted": false,
        "showHidden": true
      })
      .then(function(response) {
        var calendars = [];
        response.result.items.map(function(cal) {
          console.log(cal.id); 
          calendars.concat(cal.id); 
        }); 

      }, 
      function(err) {
        console.error("Execute error", err);
      }); 
    }   

    queryFreeBusy() {
        return ApiCalendar.gapi.client.calendar.freebusy.query({
              "resource": {
                "timeMin": "2020-04-24T21:00:31-00:00",
                "timeMax": "2020-04-29T21:00:31-00:00",
                "timeZone": "America/Los_Angeles",
                "items": [
                  {
                    "id": "rapolusakura@gmail.com"
                  },
                  {
                    "id": "terc309ucoq7tu223q9v7v2elk@group.calendar.google.com"
                  }, 
                  {
                    "id" : "usc.edu_kjaa4bpqerrrc3g24k7mh3mokk@group.calendar.google.com"
                  }
                ]
              }
            })
        .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
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
      //console.log(result); 
    }

    render() {
        return (
          <div>
            <button onClick={this.addCalendar}>
                Add Calendar
            </button>


          </div> 
        );
    }



}