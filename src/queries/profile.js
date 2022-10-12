import { toast } from 'react-toastify';
import axios from './axios';

const BASE = process.env.REACT_APP_API_BASEURL;

const getCustomerDetails = async () => {
  return await axios
    .get(`${BASE}/customer/me`)
    .then((res) => {
      console.log('res', res);
      return res.data;
    })
    .catch((err) => {
      // console.log(err.response, 'err')
      const error = err.response;
      toast.dark(
        error.data.message ||
          error.data.error ||
          error.message ||
          'Something went wrong'
      );
      // return err.response;
    });
};

export { getCustomerDetails };
