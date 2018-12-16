import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import paintingService from '../lib/painting-service';
import PaintingCard from './PaintingCard';
import HearButton from './HeartButton';

class ExhibitionList extends Component {
  state = {
    paintings: [],
    error: null,
    isLoading: true,
    showAddToFav: false,
  }

  componentDidMount() {
    paintingService.getAllPaintings()
      .then((paintings) => {
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
    const param = this.props.match.params.department;
    const { showAddToFav, handleAddToFav } = this.props;
    if (this.state.isLoading) {
      return <div>Loading</div>
    }
    return (
      <div>
        <h2>{param}</h2>
        <ul>
          {paintings.map((painting) => {
            const dept = painting.department.toLowerCase();
            const match = dept.includes(param);
            return (match && <PaintingCard key={painting._id} 
              //forgot syntax for sending all props as one object :c
              image={painting.image} artist={painting.artist}
              audio={painting.audio} country={painting.country}
              date={painting.date} department={painting.department}
              description={painting.description} title={painting.title}
              id={painting._id}/>
              )
              
              
          })}
        </ul>

        
      </div>
    );
  }
}

export default withAuth(ExhibitionList);
