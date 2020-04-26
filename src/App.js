import React from "react";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CalendarCreator from './components/CalendarCreator';
import NewEventWrapper from './components/NewEvent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from "./components/Google";
import { FirebaseContext, withFirebase } from './components/Firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HomeWithFirebase = withFirebase(Home);
const CalendarWithFirebase = withFirebase(CalendarCreator);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/calendar/:id">
          <CalendarWithFirebase />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/newEvent">
          <NewEventWrapper />
        </Route>
        <Route exact path="/">
          <HomeWithFirebase />
        </Route>
        <Route exact path="/google-sign-in">
          <Google />
        </Route>
      </Switch>
    </Router>
  );
}