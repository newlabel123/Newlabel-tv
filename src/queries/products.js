import axios from 'axios'

const getProducts = async (key, type = 'SINGLE') => {
  const BASE = process.env.REACT_APP_API_BASEURL_LIVE

  const [items, categories] = await axios.all([
    axios.get(`${BASE}/products?itemType=${type}`),
    axios.get(`${BASE}/categories`),
  ])

  return {
    items: items.data,
    categories: categories.data,
  }
}

export { getProducts }
