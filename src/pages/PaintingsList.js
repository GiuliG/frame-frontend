import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import paintingService from '../lib/painting-service'

class PaintingsList extends Component {
  state = {
    paintings: [],
    error: null,
    isLoading: true,
  }

  componentDidMount() {
    paintingService.getAllPaintings()
      .then((paintings) => {
        console.log('paintings are ', paintings)
        this.setState({
          paintings,
          isLoading: false,
        })
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }
  render() {
    const { paintings } = this.state
    if (this.state.isLoading) {
      return <div>Loading</div>
    }
    return (
      <div>
        <ul>
          {paintings.map((painting) => {
            console.log(painting.artist)
            return (
            <div key={painting._id}>
              <img src={painting.image} alt={painting.title} width="300px"/>
              <h2>{painting.title}</h2>
              <h5>{painting.artist} - {painting.date}</h5>
              <p>{painting.description}</p>
            </div>)
          })}
        </ul>
      </div>
    );
  }
}

export default PaintingsList; 