import { Outlet , Navigate, useLocation} from "react-router-dom";
       
const Protectedroute1 = () =>{
  const token =localStorage.getItem("token")

  return  token? <Outlet /> : <Navigate to ="/" />
  };
export default Protectedroute1;