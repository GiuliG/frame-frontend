import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Check out exhibitions</h3>
        <ul>
          <li><Link to={'me/paintings/asian'}>Asian Art</Link></li>
          <li><Link to={'me/paintings/european'}>European Paintings</Link></li>
          <li><Link to={'me/paintings/modern'}>Modern And Contemporary Art </Link></li>
          <li><Link to={'me/paintings/american'}>The American Wing</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;