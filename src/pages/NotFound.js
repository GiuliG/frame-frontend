'Use strict';

import React, { Component } from 'react';

class NotFound extends Component {

  render() {
    return (
      <div id="not-found">
        <span onClick={this.props.history.goBack}>go back</span>
      </div>
    );
  }
}

export default NotFound;