import axios from 'axios'
// import qs from 'qs'

const createTopup = async (token, user, txId) => {
  const BASE = process.env.REACT_APP_API_BASEURL

  try {
    const { data } = await axios.post(
      `${BASE}/topups`,
      {
        user,
        txId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return data
  } catch (error) {
    console.log({ error })
  }
}

const createOrder = async (
  token,
  user,
  product,
  amount,
  donation,
  paymentType,
  txId
) => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const { data } = await axios.post(
    `${BASE}/orders`,
    {
      user,
      product,
      amount,
      donation,
      paymentType,
      txId,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return data
}

const checkIfUserOwnsItem = async (token, user, product) => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const { data } = await axios.get(`${BASE}/orders?user=${user}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return data.filter((item) => item.product.id === product).length > 0
}

const getUsersOrders = async (key, token, user) => {
  const BASE = process.env.REACT_APP_API_BASEURL

  const { data } = await axios.get(`${BASE}/orders?user=${user}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return data.map((item) => item.product)
}

export { createTopup, createOrder, checkIfUserOwnsItem, getUsersOrders }
