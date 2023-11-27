import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";


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
      ]
    },
  ]);

  export default router