import { Outlet , Navigate, useLocation} from "react-router-dom";

      
    
const Devroute = () =>{
    const role = localStorage.getItem("isDev")
       
  return role ? <Outlet /> : <Navigate to ="/" />
  };
export default Devroute;