import axios from 'axios'

const getHomeData = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL_LIVE

  const [banner, sections] = await axios.all([
    axios.get(`${BASE}/banner`),
    axios.get(`${BASE}/homepage-sections`),
  ])

  return {
    banner: banner.data,
    sections: sections.data,
  }
}

export { getHomeData }
