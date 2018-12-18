import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import axios from 'axios';
import scanService from '../lib/scan-service';


class ScanForm extends Component {
   state = {
       selectedFile: null,
   }
    fileSelctedHandler = (event) =>{
        console.log(event)
        this.setState = {
            selectedFile: event.target.files[0],
        }
    }

    fileUploadHandlers = (event) => {
        console.log(event)
        const formData = new FormData()
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('gs://frame-project-8946c.appspot.com/', formData)
    }

render(){
    return(
        <div>
            <input type="file" onClick={this.fileSelctedHandler}/>
                <button onClick={this.fileUploadHandlers}>Submit</button>
        </div>
        )
    }
}

export default ScanForm