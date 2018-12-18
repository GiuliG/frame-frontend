import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import paintingService from '../lib/painting-service';
import PaintingCard from './PaintingCard';


class ExhibitionList extends Component {
  state = {
    paintings: [],
    error: null,
    isLoading: true,
    favs: [],
  }

  componentDidMount() {
    /* To avoid setting state unnecessarily, PromiseAll waits before
    all data (for favs and paintings) has been retrieved (since
    getAllFavs and getAllPaintings both return promises */
    const getAllFavs = paintingService.getAllFavs()
    const getAllPaintings = paintingService.getAllPaintings()
    Promise.all([getAllPaintings, getAllFavs])
      .then(data => {
        /* since getAllFavs gets me the populated objects, I cherry pick
        only the IDs using Object.keys + map before setting state */
        const favIds = Object.keys(data[1].favs).map(each => data[1].favs[each]._id)
        this.setState({
          paintings: data[0],
          isLoading: false,
          favs: favIds,
        })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  checkIfInFavs = (id) => {
    /*this function checks inside the favs to see if one of the values
    is this specific painting's id. It returns true or false, which then
    becomes the value for PaintingCard's isFavorite prop */
    const favs = this.state.favs
    return favs.includes(id)
  }

  render() {
    const { paintings } = this.state
    const param = this.props.match.params.department;
    if (this.state.isLoading) {
      return <div>Loading...</div>
    } return (
      <div>
        <h2>{param}</h2>
        <div className="pad-bottom">
          {paintings.map((painting) => {
            console.log(painting)
            const dept = painting.department.toLowerCase();
            const match = dept.includes(param);
            return (match && <PaintingCard key={painting._id}
              image={painting.image} artist={painting.artist}
              date={painting.date} department={painting.department}
              description={painting.description} title={painting.title}
              // isFavorite prop calls a function that returns a boolean
              id={painting._id} isFavorite={this.checkIfInFavs(painting._id)} />)
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(ExhibitionList);
