import axios from './axios'

const getHomeData = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL
  
    const res = await axios.get(`${BASE}/section`).then((res)=>{return res})
    console.log(res)
  
  
    return {
      sections:res.data.data
    }
 
}

export { getHomeData }
