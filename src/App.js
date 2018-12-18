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
import Menu from './components/Menu';
import Scan from './components/ScanForm';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/me/paintings/:department" component={ExhibitionList} />
          <AnonRoute path="/signup" component={Signup} />
          <AnonRoute path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <PrivateRoute path="/me/menu" component={Menu} />
          <PrivateRoute path="/me/scan" component={Scan} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Navbar/>
      </AuthProvider>
    )
  }
}

export default App;
