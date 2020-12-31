import axios from 'axios'

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

export { createTopup }
