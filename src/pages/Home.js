import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Check out exhibitions</h3>
        <ul>
          <li><Link to={'/asian-art'}>Asian Art</Link></li>
          <li><Link to={'/european-paintings'}>European Paintings</Link></li>
          <li><Link to={'/modern-contemporary'}>Modern And Contemporary Art </Link></li>
          <li><Link to={'/the-american-wing'}>The American Wing</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;