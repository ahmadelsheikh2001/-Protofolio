import { notifyError } from "./toastify";
const { default: axios } = require("axios");

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleApiError = (error) => {
  console.log(error);
  if (Array.isArray(error?.response?.data?.error)) {
    error.response.data.error.map((e) => notifyError(e.message));
  } else {
    const errorMes =
      error.response?.data?.error || error.response?.data?.message;
    notifyError(errorMes);
  }
  return error.response.data.error;
};

export default Api