import axios from './axios'

const getSinglesData = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const res = await axios.get(`${BASE}/movies`).then((res)=>{return res})
  console.log(res.data.data)


  return {
    banner: res.data.data,
    sections: [],
  }
}
// const getSinglesData = async () => {
//   const BASE = process.env.REACT_APP_API_BASEURL

//   const [banner, sections] = await axios.all([
//     // axios.get(`${BASE}/sliders/5fe208025a886c9408f8b1cf`),
//     axios.get(`${BASE}/movies`),
//   ])

//   console.log()

//   return {
//     banner: banner.data,
//     sections: sections.data,
//   }
// }

export { getSinglesData }
