import axios from 'axios'

const { token } = JSON.parse(localStorage.getItem('auth')) || { token: null }

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
})

instance.defaults.headers.common.Authorization = `Bearer ${token}`

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.status === 401) {
      console.log('UNAUTHORIZED')
      window.location.replace('/login')
    } else {
      throw error
    }
  }
)

export { instance }
