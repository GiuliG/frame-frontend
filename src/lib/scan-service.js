
import axios from 'axios';
const frameApiKey = '';

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

    imageBase64String = imageBase64String.substring(23) // trim 'data:image/png;base64,' from the Base64 string

    const requestBody = {
      "requests": [
        {
          "image":
          {
            "content": `${imageBase64String}`,
          },
          "features": [
            {
              "type": "LOGO_DETECTION",
              "maxResults": 1,
            }
          ]
        }
      ]
    }



    // request to Google Cloud Vision api
    return this.googleVision.post("/images:annotate?key=", requestBody)
      .then((response) => {
        return response.data.responses[0].logoAnnotations[0].description
      });
  }

  getPaintingFromTitleScan(paintingTitle) {
    const { title } = paintingTitle
    return this.apiInstance.get('/api/paintings/scan', { params: { title: title } })
      .then((response) => {
        return response.data
      })
  }
}




const scan = new ScanApi()

export default scan