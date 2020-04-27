import React from "react";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CalendarCreator from './components/CalendarCreator';
import NewEventWrapper from './components/NewEvent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from "./components/Google";
import { FirebaseContext, withFirebase } from './components/Firebase';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {

  const authUser = Cookies.get('authUser');

  return (
    <Route {...rest} render={props => 
      authUser ? 
      (
        // <HomeWithFirebase />
        <Component {...props} />
      ) 
      : 
      (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
    } />
  );
}

const HomeWithFirebase = withFirebase(Home);
const CalendarWithFirebase = withFirebase(CalendarCreator);
const PrivateRouteWithFirebase = withFirebase(PrivateRoute);

function App() {
  return (
    <React.Fragment>
      <Helmet>
          <title>Calendar</title>
      </Helmet>
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
          <PrivateRoute path="/newEvent" component={NewEventWrapper} />
          <PrivateRoute path="/" component={HomeWithFirebase} />
          <Route exact path="/google-sign-in">
            <Google />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default withFirebase(App);