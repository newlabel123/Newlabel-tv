import axios from 'axios'

const signup = async (formData) => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const { data } = await axios.post(`${BASE}/auth/local/register`, formData)

  return data
}

const login = async (formData) => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const { data } = await axios.post(`${BASE}/auth/local`, formData)

  return data
}

export { signup, login }
