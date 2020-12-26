import axios from 'axios'

const getProducts = async (key, type = 'single', sliderId) => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const [items, categories, banner] = await axios.all([
    axios.get(`${BASE}/products?productType=${type}`),
    axios.get(`${BASE}/categories`),
    axios.get(`${BASE}/sliders/${sliderId}`),
  ])

  return {
    items: items.data,
    categories: categories.data,
    banner: banner.data,
  }
}

const getProductDetails = async (key, id) => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const { data } = await axios.get(`${BASE}/products/${id}`)

  return data
}

export { getProducts, getProductDetails }
