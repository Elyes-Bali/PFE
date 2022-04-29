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


  export const Removcom = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/comment/delcom/${id}` ,config);
     GetAllCom();
    } catch (error) {
      console.log(error);
    }
  };