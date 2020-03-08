import React from "react";
import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: sessionStorage.getItem("token")
    }
  });
};

export default axiosWithAuth;
