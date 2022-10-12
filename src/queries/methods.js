import axios from './axios'
import { errorToast } from '../components/common/Toast'

const baseUrl = process.env.REACT_APP_API_BASEURL;

const AxiosService = {
  POST: async (url, data) => {
    return await axios
      .post(`${url}`, data)
      .then((res) => {
        return { res: res };
      })
      .catch((err) => {
        const error = err.response;
        errorToast(
          error.data.message || error.data.error || error.message || "Something went wrong"
        );
        // return { error: err.response };
      });
  },
  GET: async (url) => {
    return await axios
      .get(`${url}`)
      .then((res) => {
        return { res: res };
      })
      .catch((err) => {
        const error = err.response;
        errorToast(
          error.data.message || error.data.error || "Something went wrong"
        );
        // return { error: err.response };
      });
  },
};

export default AxiosService;
