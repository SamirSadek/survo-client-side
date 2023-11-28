import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";
import Surveys from "../Pages/Surveys/Surveys";


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
            element:<Surveys/>
        },
      ]
    },
  ]);

  export default router