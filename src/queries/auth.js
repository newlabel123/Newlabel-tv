import axios from "axios";
import { toast } from "react-toastify";

const BASE = process.env.REACT_APP_API_BASEURL;

const signup = async (formData) => {
  return await axios
    .post(`${BASE}/auth/customer/signup`, formData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response, 'err')
      const error = err.response;
      toast.dark(
        error.data.message[0] ||
          error.data.error ||
          error.message ||
          "Signup failed"
      );
    });
};
const login = async (formData) => {
  return await axios
    .post(`${BASE}/auth/customer/login`, formData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      // console.log(err.response, 'err')
      const error = err.response;
      toast.dark(
        error.data.message ||
          error.data.error ||
          error.message ||
          "Something went wrong"
      );
      // return err.response;
    });
};
const getCustomerDetails = async (id) => {
  return await axios
    .get(`${BASE}/customer/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      // console.log(err.response, 'err')
      const error = err.response;
      toast.dark(
        error.data.message ||
          error.data.error ||
          error.message ||
          "Something went wrong"
      );
      // return err.response;
    });
};

export { signup, login, getCustomerDetails };
