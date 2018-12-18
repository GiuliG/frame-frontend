import axios from 'axios';

class PaintingsApi {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }

  getAllPaintings() {
    return this.apiInstance.get('/api/paintings')
      .then((reponse) => {
        return reponse.data
      })
  }

  getAllFavs() {
    return this.apiInstance.get('/api/paintings/favs')
      .then((reponse) => {
        return reponse.data
      })
  }

  addPaintingToFavs(id) {
    return this.apiInstance.put(`/api/paintings/favs/${id}`)
      .then((response) => {
        return response.data
      })
  }

  removePaintingFromFavs(id) {
    return this.apiInstance.delete(`/api/paintings/favs/${id}`)
      .then((response) => {
        return response.data
      })
  }

}
const painting = new PaintingsApi()

export default painting