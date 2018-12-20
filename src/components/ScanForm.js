import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import scanService from '../lib/scan-service';
import FileBase64 from 'react-file-base64';
import PaintingCard from './PaintingCard';




class ScanForm extends Component {
    state = {
        file: [],
        title: '',
        isLoading: true,
        description: [],
    }
    fileSelctedHandler = (event) => {
        console.log(event)
        // this.setState = {
        //     file: ,
        // }
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
            .then(() =>{
                this.getDescription();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // renderCard = () =>{
    //     const painting = this.state.description[0];
    //     console.log('called render card')
    //     console.log(painting)
    //     return <PaintingCard image={painting.image}
    //     artist={painting.artist} date={painting.date}
    //     department={painting.department} description={painting.description}
    //     title={painting.title} id={painting._id}/>
    // }

    // Callback~
    getFiles = (file) => {
        console.log(file)
        this.setState(
            { file: file[0].base64 })
    }

    //get description from our database
    getDescription = () => {
        const { title } = this.state
        scanService.getPaintingFromTitleScan({ title })
            .then((result) => {
                //console.log(result, 'hey')
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
        console.log(this.state.description)

        return (<div>
            {/* <input type="file" onClick={this.fileSelctedHandler}/>*/}
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


