import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import PaintingCard from '../components/PaintingCard';
import paintingService from '../lib/painting-service'


class Private extends Component {
  state = {
    paintings: [],
    isLoading: true,
  }

  componentDidMount() {
    paintingService.getAllFavs()
      .then((favs) => {
        this.setState({
          paintings: favs,
          isLoading: false,
        })
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  checkDeleltedOnes = (results) => {
    this.setState({
      paintings: {
        favs: results.favs
      }
    })
  }

  render() {
    const loading = this.state.isLoading;
    const favs = this.state.paintings.favs;
    return (
      <div className="container">
        <h1 className="username">{this.props.user.username}'s favorites</h1>
        <h4>Browse Your Personal Collection</h4>
        
    
        {loading ? <p>Loading</p> : <div id="main">{favs.map((eachFav) => {
          return (
            <PaintingCard key={eachFav._id} image={eachFav.image}
              artist={eachFav.artist} date={eachFav.date}
              department={eachFav.department} description={eachFav.description}
              title={eachFav.title} id={eachFav._id} isFavorite={true} deleteFav={this.checkDeleltedOnes} />
          )
        })}
        </div>
        }
      </div>
    )
  }
}

export default withAuth(Private);
