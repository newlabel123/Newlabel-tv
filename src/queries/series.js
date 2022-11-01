import axios from './axios';

const getSeriesData = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL;

  const res = await axios.get(`${BASE}/series`)
  console.log(res.data);

  return {
    banner: res.data.data,
    sections: res.data.data,
  };
};
// const getSeriesDetails = async () => {
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

const getSeriesDetails = async (id) => {
  const BASE = process.env.REACT_APP_API_BASEURL;

  const { data } = await axios.get(`${BASE}/series/${id}`);

  console.log('data', data.data);

  return { data: data.data, related: [] };
};

const getSeriesSeasons = async (id) => {
  const BASE = process.env.REACT_APP_API_BASEURL;

   await axios.get(`${BASE}/seasons?series=${id}`).then((res)=>{
    console.log('iuves',res.data.data)

  const seriesId = res.data.data.series[0]

   axios.get(`${BASE}/seasons?series=${seriesId}/episodes`).then((res)=>{
    console.log('episodes',res.data.data)
   })

 
  })

  

  // return res.data;
};

const getSeriesSeasonEpisodes = async (id) => {
  const BASE = process.env.REACT_APP_API_BASEURL;

  const { data } = await axios.get(`${BASE}/seasons?series=${id}`);

  console.log('seasons epsiode', data.data);

  return { data: data.data};
};

export { getSeriesData, getSeriesDetails, getSeriesSeasons ,getSeriesSeasonEpisodes};
