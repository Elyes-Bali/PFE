import axios from "axios";

export const GetAllMess = async () => {
  
    try {
      const res = await axios.get("/api/message/allmess");
      //  console.log(res.data.mesg)
      return res.data.mesg;
    } catch (error) {
      console.log(error);
    }
  };


  export const Removemess = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/message/delmess/${id}` ,config);
      GetAllMess();
    } catch (error) {
      console.log(error);
    }
  };