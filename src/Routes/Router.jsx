import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";
import Surveys from "../Pages/Surveys/Surveys";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import SurveyStatus from "../Pages/Dashboard/Admin/SurveyStatus";
import PaymentHistory from "../Pages/Dashboard/Admin/PaymentHistory";
import SurveyResponse from "../Pages/Dashboard/Admin/SurveyResponse";
import Charts from "../Pages/Dashboard/Admin/Charts";


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
      element:<Dashboard/>,
      children:[
        {
          path:'manageuser',
          element:<ManageUser/>
        },
        {
          path:'surveystatus',
          element:<SurveyStatus/>
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory/>
        },
        {
          path:'surveyresponse',
          element:<SurveyResponse/>
        },
        {
          path:'charts',
          element:<Charts/>
        }
      ]
    }
  ]);

  export default router