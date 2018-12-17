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
        console.log(favs)
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

    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <h3 onClick={this.props.logout}>Log out</h3>
        { loading ? <p className="error-sms">Loading</p> : <div>{this.state.paintings.map((eachFav) => {
          return (
          <PaintingCard key={eachFav._id}  image={eachFav.image}/>)
        }) }
        </div>
        }
      </div>
    )
  }
}

export default withAuth(Private);
