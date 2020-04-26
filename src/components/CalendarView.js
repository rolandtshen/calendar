import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarView extends Component {

  constructor(props) {
    super(props); 
    console.log(moment(new Date()).format("dddd, MMMM Do YYYY, h:mm a")); 
    this.state = {
      events: [
        {
          start: moment("2020-04-25T15:00:00-07:00").toDate(),
          end: moment("2020-04-25T19:45:00-07:00").add(1, "hour").toDate(),
          title: "BUSY"
        }
      ]
    };
  }

  convertTimeFormat() {
    
  }

  componentDidMount() {
   // this.props.eventsList.map
  }

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default CalendarView;