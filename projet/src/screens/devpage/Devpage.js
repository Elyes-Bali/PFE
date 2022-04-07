import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Resumee from '../resume/Resumee'

const Devpage = () => {
    const [listcvs, setListcvs] = useState([]);


    const getAllCvs = async () => {
        try {
          const res = await axios.get("/api/res/getallcv");
          setListcvs(res.data.result);
          // console.log(res.data.result)
        } catch (error) {}
      };
      useEffect(() => {
        
        getAllCvs();
        console.log(listcvs);
       
      }, [ listcvs.length]);


  return (
    <div> 
      
        
    </div>
  )
}

export default Devpage