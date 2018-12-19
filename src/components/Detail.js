import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import paintingService from '../lib/painting-service';
 



class DetailPage extends Component {
  state ={
    painting: {},
    isLoading: true,
}
componentDidMount(){
    const { id } = this.props.match.params;
    paintingService.getDetailPainting(id)
    .then((painting) => {
        this.setState({
        painting,
        isLoading: false
        })
    })
}

    
    render() {
      const cardGradient = {
        backgroundImage: `url(${this.state.painting.image})`
      }

      if (this.state.isLoading) {
        return <div>Loading</div>
    }
    return(
        
          <div className="detail-page" style={cardGradient}>
          <div className="painting-detail">
            <h3>{this.state.painting.title}</h3>
            {/*<img src={this.state.painting.image}/>*/}
              <p>{this.state.painting.artist} - {this.state.painting.date}</p>
              <p>{this.state.painting.description}</p>
              <h5>Listen to the Audio Guide</h5>
                <audio controls src={this.state.painting.audio} type="audio/mp3">
                  <h3>Listen to Audio Guide:</h3>
                  </audio>
                  <span onClick={this.props.history.goBack}>back to collection</span>
            </div>
          </div>
        );
      }
    }


export default withAuth(DetailPage);