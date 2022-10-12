import axios from './axios';
// import qs from 'qs'

const createTopup = async (token, user, txId) => {
  const BASE = process.env.REACT_APP_API_BASEURL;

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
    );

    return data;
  } catch (error) {
    console.log({ error });
  }
};

const createOrder = async (
  token,
  user,
  product,
  amount,
  donation,
  paymentType,
  txId,
  season
) => {
  // const BASE = process.env.REACT_APP_API_BASEURL

  const BASE = 'http://localhost:1337';

  console.log(season);

  const { data } = await axios.post(
    `${BASE}/orders`,
    {
      user,
      product,
      amount,
      donation,
      paymentType,
      txId,
      season,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

const checkIfUserOwnsItem = async (token, user, product, season) => {
  const BASE = process.env.REACT_APP_API_BASEURL;

  const { data } = await axios.get(`${BASE}/orders?user=${user}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const filtered = data.filter((item) => item.product.id === product);

  if (!season) {
    return filtered.length > 0;
  } else {
    console.log(filtered);
    return filtered.length > 0 && filtered[0].details.includes(season);
  }
};

const getUsersOrders = async () => {
  const BASE = process.env.REACT_APP_API_BASEURL;
  const { data } = await axios.get(`${BASE}/order/me`).then((res) => {
    console.log(res);
    return res;
  });

  return data
};

export { createTopup, createOrder, checkIfUserOwnsItem, getUsersOrders };
