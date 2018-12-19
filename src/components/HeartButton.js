import React, { Component } from 'react';
import paintingService from '../lib/painting-service'

class HeartButton extends Component {

  state = {
    addedToFavorite: this.props.isFavorite
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

  removeFromFavorite = () => {
    paintingService.removePaintingFromFavs(this.props.paintingId)
      .then((results) => {
        if(this.props.deleteFav) {
          this.props.deleteFav(results)
        }
        this.setState({
          addedToFavorite: false,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {
    const { addedToFavorite } = this.state;
    return (
      <div id="favs">
        {!addedToFavorite ? <button onClick={this.addToFavorite} id={this.props.id}>
          <img className="icon" src={process.env.PUBLIC_URL + '/icons/like.svg'} alt="add to favs" />
        </button> :
          <button onClick={this.removeFromFavorite} id={this.props.id}>
            <img className="icon" src={process.env.PUBLIC_URL + '/icons/like-alt.svg'} alt="remove from favs" />
          </button>}
      </div>
    )
  }
}

export default HeartButton;

