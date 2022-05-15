import Admin from '../containers/admin/admim';
import Login from '../containers/login/login';

import Home from '../containers/home/index';
import Category from '../containers/category/index';
import Product from '../containers/product/index';
import Role from '../containers/role/index';
import User from '../containers/user/index';
import Bar from '../containers/charts/bar';
import Line from '../containers/charts/line';
import Pie from '../containers/charts/pie';

import { Navigate} from "react-router-dom"

const Routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "role",
        element: <Role />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "charts/bar",
        element: <Bar />,
      },
      {
        path: "charts/line",
        element: <Line />,
      },
      {
        path: "charts/pie",
        element: <Pie />,
      },
    ]
  },
  {
    path: "/",
    element: <Navigate to="/login" />
  },
]

export default Routes