import { Outlet , Navigate, useLocation} from "react-router-dom";



// const useAuth = () => {
//   const User = { loggedIn: false };
//  return User && User.loggedIn;
// };      
    
const Adminroute = () =>{
    const isAdmin = localStorage.getItem("isAdmin");
//  const isAuth = useAuth();
  return isAdmin ? <Outlet /> : <Navigate to ="/" />
  };
export default Adminroute;