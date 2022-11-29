import axios from './axios';

const getSinglesData = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL;

  const res = await axios.get(`${BASE}/movies`).then((res) => {
    return res;
  });
  console.log(res.data.data);

  return {
    banner: res.data.data,
    sections: res.data.data,
  };
};

const getSingleDetails = async (id) => {
  const BASE = process.env.REACT_APP_API_BASEURL;

  const { data } = await axios.get(`${BASE}/movies/${id}`);

  console.log('data', data);

  return { data: data.data, related: [] };
};


export { getSinglesData, getSingleDetails };
