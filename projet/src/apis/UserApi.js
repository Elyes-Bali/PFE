import React from "react";
import axios from "axios";

export const getAllCvs = async () => {
  try {
    const res = await axios.get("/api/res/getallcv");
    return res.data.result;

    // console.log(res.data.result)
  } catch (error) {
    console.log(error);
  }
};

export const CurrentUser = async () => {
  let opts = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/user/auth", opts);
     
    return res;
  } catch (error) {
    console.log(error);
  }
};


