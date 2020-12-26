import axios from 'axios'

const getHomeData = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const [banner, sections] = await axios.all([
    axios.get(`${BASE}/sliders/5fe208585a886c9408f8b1d4`),
    axios.get(`${BASE}/homepage-sections`),
  ])

  return {
    banner: banner.data,
    sections: sections.data,
  }
}

export { getHomeData }
