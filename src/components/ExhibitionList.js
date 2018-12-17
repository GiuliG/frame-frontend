import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import paintingService from '../lib/painting-service';
import PaintingCard from './PaintingCard';


class ExhibitionList extends Component {
  state = {
    paintings: [],
    error: null,
    isLoading: true,

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

    if (this.state.isLoading) {
      return <div>Loading</div>
    }
    return (
      <div>
        <h2>{param}</h2>
        <div>
          {paintings.map((painting) => {
            const dept = painting.department.toLowerCase();
            const match = dept.includes(param);
            return (match && <PaintingCard key={painting._id} 
              image={painting.image} artist={painting.artist}
              date={painting.date} department={painting.department}
              description={painting.description} title={painting.title}
              id={painting._id}/>
              )
              
              
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(ExhibitionList);
