import React, { Component } from 'react';
import paintingService from '../lib/painting-service'

class HeartButton extends Component {

  state = {
    addedToFavorite: false,
  }

  addToFavorite = () => {
    paintingService.addPaintingToFavs(this.props.paintingId)
    .then(() => {
      this.setState({
        addedToFavorite: true,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { addedToFavorite } = this.state;
    console.log(addedToFavorite)
    return (

      <div>
        <button onClick={this.addToFavorite} style={[
          { display: addedToFavorite ? 'block' : 'none' }, { color: addedToFavorite ? 'pink' : 'none' }
        ]}>Fav</button>
      </div>
    )
  }
}

export default HeartButton;

