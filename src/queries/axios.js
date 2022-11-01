import axios from 'axios';
import {toast} from 'react-toastify';

const auth = localStorage.getItem('auth') ?? null;

// const { token } = JSON.parse(localStorage.getItem("auth") ?? []) ?? {
//   token: null,
// };

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

if (auth) {
  const { jwt } = JSON.parse(auth);
  instance.defaults.headers['c-authorization'] = `Bearer ${jwt}`;
  console.log('token', jwt)

}


instance.interceptors.response.use(
  (response) => {
    // console.log('res', response);
    return response;
  },
  (error) => {
    console.log('err', error.response);
    if (error?.response.status === 401) {
      console.log('UNAUTHORIZED');
      toast.dark('Token expired. Please login again.')
      // localStorage.removeItem('auth')
      // window.location.replace('/login');
    } else {
      throw error;
    }
  }
);

export default instance;
