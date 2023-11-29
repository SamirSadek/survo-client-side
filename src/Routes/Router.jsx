import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";
import Surveys from "../Pages/Surveys/Surveys";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<SignUp/>
        },
        {
            path:'/surveys',
            element:<PrivateRoutes><Surveys/></PrivateRoutes>
        },
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard/>
    }
  ]);

  export default router