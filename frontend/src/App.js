import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import {Provider} from 'react-redux';

import store from './store';

import PrivateRoute from './components/Common/PrivateRoute';

import Navbar from './components/Layouts/Navbar/Navbar';
import Landing from './components/Layouts/Landing/Landing';
import Footer from './components/Layouts/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Viewer from './components/Viewer/Viewer';

import 'materialize-css'; // materialize js
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
          <div className="App">
           <header>
             <Navbar/>
           </header>
            <Route exact path='/' component={Landing} />
             <div className="container main">
               <Route path='/register' component={Register} />
               <Route path='/login' component={Login} />
               <Switch>
                 <PrivateRoute path='/dashboard' component={Dashboard} />
               </Switch>
               <Switch>
                 <PrivateRoute path='/viewer' component={Viewer} />
               </Switch>
             </div>
           <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
