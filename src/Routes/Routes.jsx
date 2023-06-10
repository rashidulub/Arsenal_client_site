import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret/Secret";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Myclass from "../Pages/Dashboard/MyClass/Myclass";
import Payment from "../Layouts/Dashboard/Payment/Payment";
import PaymentHistory from "../Layouts/Dashboard/PaymentHistory";
import Enroll from "../Layouts/Dashboard/Enroll";
import AllUsers from "../Layouts/Dashboard/AllUsers/AllUsers";
import Design from "../Pages/Design/Design";
import AddClass from "../Layouts/Dashboard/AddClass/AddClass";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'instructor',
        element: <Instructor></Instructor>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }
      
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'myclass',
        element:<Myclass></Myclass>

    },
    {
      path:'payment',
      element:<Payment></Payment>
    },
    {
      path:'history',
      element:<PaymentHistory></PaymentHistory>
    },
    {
      path:'enroll',
      element:<Enroll></Enroll>
    },
    {
      path:'allUsers',
      element:<AllUsers></AllUsers>
    },
    {
      path:'design',
      element:<Design></Design>
    },
    {
      path:'addClass',
      element:<AddClass></AddClass>
    }
    

  ]
  }
  
]);