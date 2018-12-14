import axios from 'axios';

class PaintingsApi {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }

    getAllPaintings(){
      return this.apiInstance.get('/api/paintings')
      .then ((reponse) =>{
          return reponse.data
      })
    }  
}    
const painting = new PaintingsApi()

export default painting