import axios from './axios'

const getSeriesData = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const res = await axios.get(`${BASE}/series`).then((res)=>{return res})
  console.log(res)


  return {
    banner: res.data.data,
    sections: res.data.data,
  }
}
// const getSeriesData = async () => {
//   const BASE = process.env.REACT_APP_API_BASEURL

//   const [banner, sections] = await axios.all([
//     axios.get(`${BASE}/sliders/5fe1e4695425ba931d2c3936`),
//     axios.get(`${BASE}/series-page-sections`),
//   ])

//   return {
//     banner: banner.data,
//     sections: sections.data,
//   }
// }

export { getSeriesData }
