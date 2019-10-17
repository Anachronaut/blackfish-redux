import axios from 'axios'

let base = 'api'

export default {
  getAll() {
    return axios.get('/api/top10/').then( response => {
      return response.data
    })
  },
  addPlayer(player) {
    return axios.post(base_url, student).then(response => {
      return response.data
    })
  },
  deletePlayer(id) {
    return axios.delete(`${base_url}/${id}`).then(response => {
      return response.data
    })
  }
}
