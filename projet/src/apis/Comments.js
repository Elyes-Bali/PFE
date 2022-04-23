import axios from "axios";

export const GetAllCom = async () => {
  
    try {
      const res = await axios.get("/api/comment/allcomm");
      //  console.log(res.data.com)
      return res.data.com;
    } catch (error) {
      console.log(error);
    }
  };