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
import CreateSurvey from "../Pages/Dashboard/Surveyor/CreateSurvey";
import UpdateSurvey from "../Pages/Dashboard/Surveyor/UpdateSurvey";
import FeedbackUsers from "../Pages/Dashboard/Surveyor/FeedbackUsers";
import ParticipateSurvey from "../Pages/Dashboard/User/ParticipateSurvey";
import UpdateSurveyItem from "../Pages/Dashboard/Surveyor/UpdateSurveyItem";
import ParticipateSurveyItem from "../Pages/Dashboard/User/ParticipateSurveyItem";
import Pro from "../Pages/Pro/Pro";
import Payment from "../Pages/Pro/Payment";
import SurveyorHome from "../Pages/Dashboard/Surveyor/SurveyorHome";
import SurveyDetails from "../components/SurveyDetails";


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
            path:'/pro',
            element:<Pro/>
        },
        {
            path:'/pro/payment',
            element:<Payment/>
        },
        {
            path:'/surveys',
            element:<Surveys/>
        },
        {
            path:'/surveys/:id',
            element:<PrivateRoutes><SurveyDetails/></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
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
          path:'surveyorHome',
          element:<SurveyorHome/>
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
        },
        {
          path:'createsurvey',
          element:<CreateSurvey/>
        },
        {
          path:'updatesurvey',
          element:<UpdateSurvey/>
        },
        {
          path:'udpatesurvey/:id',
          element:<UpdateSurveyItem/>,
          loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
        },
        {
          path:'participatesurvey/:id',
          element:<ParticipateSurveyItem/>,
          loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
        },
        {
          path:'feedbacks',
          element:<FeedbackUsers/>
        },
        {
          path:'participate',
          element:<ParticipateSurvey/>
        },
      ]
    }
  ]);

  export default router