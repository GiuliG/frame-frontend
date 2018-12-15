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
import ExhibitionList from './components/ExhibitionList';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} /> {/* links to departments are inside*/}
          <PrivateRoute path="/me/paintings/:department" component={ExhibitionList} /> {/* needs to take departments match parameters from the links in Home component*/}
          <AnonRoute path="/signup" component={Signup} />
          <AnonRoute path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Navbar></Navbar>
      </AuthProvider>
    )
  }
}

export default App;
