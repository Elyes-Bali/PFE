import { Outlet , Navigate} from "react-router-dom";   
const Adminroute = () =>{
    const isAdmin = localStorage.getItem("isAdmin");
  return isAdmin ? <Outlet /> : <Navigate to ="/" />
  };
export default Adminroute;