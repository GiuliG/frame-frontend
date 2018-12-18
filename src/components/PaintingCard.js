'Use Strict'

import React, { Component } from 'react';
import HeartButton from './HeartButton';

class PaintingCard extends Component {

  render() {
    return (
      <div className="painting-card">
        <img src={this.props.image} alt={this.props.title}/> 
        <h2>{this.props.title}</h2>
        <h5>{this.props.artist} - {this.props.date}</h5>
        <p>{this.props.description}</p>
        <HeartButton paintingId={this.props.id} isFavorite={this.props.isFavorite}/>
      </div>
    );
  }
}

export default PaintingCard;