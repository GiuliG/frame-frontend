import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home';
import PaintingsList from './pages/PaintingsList';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <AnonRoute path="/signup" component={Signup} />
          <AnonRoute path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    )
  }
}

export default App;
