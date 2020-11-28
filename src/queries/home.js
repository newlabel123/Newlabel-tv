import axios from 'axios'

const getHomeData = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL_LIVE

  const [banner] = await axios.all([
    axios.get(`${BASE}/banner`)
  ])

  return {
    banner: banner.data
  }
}

export { getHomeData }
