import React from "react";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Help from './components/Help';
import CalendarCreator from './components/CalendarCreator';
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/calendarCreator">
            <CalendarCreator />
          </Route>
        </Switch>
    </Router>
  );
}