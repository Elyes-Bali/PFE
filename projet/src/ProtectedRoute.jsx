
import { Outlet , Navigate, useLocation} from "react-router-dom";



// const useAuth = () => {
//   const User = { loggedIn: false };
//  return User && User.loggedIn;
// };          
const ProtectedRoutes = ({auth}) =>{
//  const isAuth = useAuth();
  return auth ? <Outlet /> : <Navigate to ="/" />
  };
export default ProtectedRoutes;