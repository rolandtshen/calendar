import React from "react";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CalendarCreator from './components/CalendarCreator';
import NewEventWrapper from './components/NewEvent'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        </Switch>
    </Router>
  );
}