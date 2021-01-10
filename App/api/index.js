import axiosLib from 'axios'

const axios = axiosLib.create({
  baseURL: 'http://localhost:3000/',
})

const api = {
  createUser(data) {
    return axios.post('/user', data)
  },
  postLocation(data) {
    return axios.post('/user/location', data)
  },
  registerCovid(data) {
    return axios.post('/user/has-covid', data)
  },
  getCovidCount(data) {
    return axios.post('/covid-count', data)
  },
}

export default api
