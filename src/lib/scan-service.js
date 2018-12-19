
import axios from 'axios';
import FileBase64 from 'react-file-base64';

class ScanApi {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  

  // set up Google Cloud Vision API
  this.googleVision = axios.create({
    baseURL: `https://vision.googleapis.com/v1`
  });
}

getTextFromImage(imageBase64String) {
    imageBase64String = imageBase64String.substring(22) // trim 'data:image/png;base64,' from the Base64 string
    console.log(imageBase64String);
    
    const requestBody = {
      "requests" : [
        {
          "image": 
            {
              "content": imageBase64String
            },
          "features": [
            {
              "type": "LOGO_DETECTION"
            }
          ]
        }
      ]
    }


// request to Google Cloud Vision api
return this.googleVision.post('/images:annotate?key=AIzaSyBGhAh3nMZ8PgFGCPMtVaDKaLs7JyzyK8Y', requestBody)
.then((response) => {
  console.log(response);
  return response.data.responses[0].textAnnotations
        });    
    }
}




const scan = new ScanApi()

export default scan