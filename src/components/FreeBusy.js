import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

export default class FreeBusy extends React.Component {
    constructor(props) {
        super(props);
        this.gapi = ApiCalendar.gapi;
        this.execute = this.execute.bind(this);
        this.one = this.one.bind(this); 
    }


    execute() {
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

     one() {
        if(!ApiCalendar.sign) {
            ApiCalendar.handleAuthClick();
        }
        var result = this.execute(); 
        //console.log(result); 
    }

    render() {
        return (
            <button onClick={this.one}>
                Add Calendar
            </button>
        );
    }



}