import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import paintingService from '../lib/painting-service';

class ExhibitionList extends Component {
  state = {
    paintings: [],
    error: null,
    isLoading: true,
  }

  componentDidMount() {
    paintingService.getAllPaintings()
      .then((paintings) => {
        console.log(paintings)
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
            if (painting.department === this.props.match.params.department) {
              return (
                <div key={painting._id} className="painting-card">
                  <img src={painting.image} alt={painting.title} />
                  <h2>{painting.title}</h2>
                  <h5>{painting.artist} - {painting.date}</h5>
                  <p>{painting.description}</p>
                  <p>FAV</p>
                </div>
              )
            } else {
              return null
            }
          })}
        </ul>
      </div>
    );
  }
}

export default withAuth(ExhibitionList);
