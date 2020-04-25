import React from "react";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CalendarCreator from './components/CalendarCreator';
import NewEventWrapper from './components/NewEvent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from "./components/Google";
import CalendarView from './components/CalendarView'; 

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/calendarCreator">
            <CalendarCreator />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/newEvent">
            <NewEventWrapper />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/google-sign-in">
            <Google />
          </Route>
          <Route exact path="/calendar-view">
            <CalendarView />
          </Route>
        </Switch>
    </Router>
  );
}