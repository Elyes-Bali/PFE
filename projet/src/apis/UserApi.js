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

export const GetAllDev = async () => {
  
  try {
    const res = await axios.get("/api/user/alldev");
     
    return res.data.devs;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllClt = async () => {
  
  try {
    const res = await axios.get("/api/user/allclt");
     
    return res.data.clts;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllUsers = async () => {
  
  try {
    const res = await axios.get("/api/user/allusers");
     
    return res.data.allusers;
  } catch (error) {
    console.log(error);
  }
};

export  const hundelUpdate = async (id,user) => {
  const config = { headers: { "Content-Type": "application/json" } };
  try {
    const res = await axios.put(
      `/api/user/update/${id}`,
      user,
      config
    );
  } catch (error) {
    console.log(error);
  }
};


