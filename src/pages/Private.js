import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import paintingService from '../lib/painting-service';
import PaintingCard from '../components/PaintingCard';

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
  render() {
    const loading = this.state.isLoading;
    const favs = this.state.paintings.favs;
    console.log(favs)
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <h3 onClick={this.props.logout}>Log out</h3>
        {loading ? <p className="error-sms">Loading</p> : <div className="pad-bottom">{favs.map((eachFav) => {
          return (
            <PaintingCard key={eachFav._id} image={eachFav.image}
              artist={eachFav.artist} date={eachFav.date}
              department={eachFav.department} description={eachFav.description}
              title={eachFav.title} id={eachFav._id} isFavorite={true} />
          )
        })}
        </div>
        }
      </div>
    )
  }
}

export default withAuth(Private);
