import React, { Component } from 'react';
import scanService from '../lib/scan-service';
import FileBase64 from 'react-file-base64';

class ScanForm extends Component {
  state = {
    file: [],
    title: '',
    isLoading: true,
    description: [],
  }

  fileUploadHandlers = () => {
    const string = this.state.file;
    scanService.getTextFromImage(string)
      .then((title) => {
        this.setState({
          title,
          isLoading: false,
        })
      })
      .then(() => {
        this.getDescription();
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Callback~
  getFiles = (file) => {
    this.setState(
      { file: file[0].base64 })
  }

  //get description from our database
  getDescription = () => {
    const { title } = this.state
    scanService.getPaintingFromTitleScan({ title })
      .then((result) => {
        this.setState({
          description: result,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const isLoadingNow = this.state.isLoading;
    return (<div>
      <button onClick={this.fileUploadHandlers}>Submit</button>
      <FileBase64 multiple={true} onDone={this.getFiles} />
      {isLoadingNow ? <p>Processing your image...</p> : <div>
        {(this.state.description.length) ? <div className="painting-card">
          <img src={this.state.description[0].image} alt={this.state.description[0].title} />
          <h2>{this.state.description[0].title}</h2>
          <h5>{this.state.description[0].artist} - {this.state.description[0].date}</h5>
          <p>{this.state.description[0].description}</p>
          <p>Listen to Audio Guide:</p>
          <audio controls src={this.state.description[0].audio} type="audio/mp3">

          </audio>
          {/*<HeartButton paintingId={this.props.id} isFavorite={this.props.isFavorite} deleteFav={this.props.deleteFav}*/}
        </div> : <p>Not part of the MET collection</p>}
      </div>}


    </div>
    )
  }
}

export default ScanForm


