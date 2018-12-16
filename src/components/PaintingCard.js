'Use Strict'

import React, { Component } from 'react';

class PaintingCard extends Component {
  render() {
    return (
      <div className="painting-card">
        <img src={this.props.image} alt={this.props.title}/> 
        <h2>{this.props.title}</h2>
        <h5>{this.props.artist} - {this.props.date}</h5>
        <p>{this.props.description}</p>
        <p>FAV</p>
      </div>
    );
  }
}

export default PaintingCard;