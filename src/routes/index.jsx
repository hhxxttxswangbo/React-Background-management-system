import Admin from '../containers/admin/admim';
import Login from '../containers/login/login';
import { Navigate } from "react-router-dom"

const Routes = [
  {
    path: "/login",
    element: <Login />,

  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/",
    element: <Navigate to="/login" />
  },
]

export default Routes