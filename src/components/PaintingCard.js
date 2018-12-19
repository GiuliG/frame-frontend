'Use Strict'

import React, { Component } from 'react';
import HeartButton from './HeartButton';
import DetailPage from './DetailPage';
import { Link } from 'react-router-dom';

class PaintingCard extends Component {

  click() {
    console.log("the button was clicked")
  }

  render() {
    return (
      <div className="painting-card">
        <img src={this.props.image} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <h5>{this.props.artist} - {this.props.date}</h5>
       
        <Link to={{pathname:`/me/paintings/${this.props.id}`, state: {image: this.props.image}} }> Explore</Link>
        {/*<p>{this.props.description}</p>*/}
        <HeartButton paintingId={this.props.id} isFavorite={this.props.isFavorite} />
      </div>
    );
  }
}

export default PaintingCard;