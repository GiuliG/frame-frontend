import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import axios from 'axios';
import scanService from '../lib/scan-service';
import FileBase64 from 'react-file-base64';


class ScanForm extends Component {
   state = {
    files: []
   }
    fileSelctedHandler = (event) =>{
        console.log(event)
        this.setState = {
            selectedFile: event.target.files[0],
        }
    }

    //fileUploadHandlers = (event) => {
        //console.log(event)
        //const formData = new FormData()
        //formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
    //}

     // Callback~
     getFiles = (files)=> {
        this.setState({ files: files })
      }

render(){
    return( <div>
           {/* <input type="file" onClick={this.fileSelctedHandler}/>*/}
                <button onClick={this.fileSelctedHandler}>Submit</button>
                <FileBase64
                    multiple={ true }
                    onDone={ this.getFiles} />
        </div>
        )
    }
}

export default ScanForm


  