import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistics from "../pages/DashboardPage/Admin/Statistics";
import AllDeliveryMan from "../pages/DashboardPage/Admin/AllDeliveryMan";
import AllParcels from "../pages/DashboardPage/Admin/AllParcels";
import AllUsers from "../pages/DashboardPage/Admin/AllUsers";
import MyProfile from "../pages/DashboardPage/User/MyProfile";
import MyParcels from "../pages/DashboardPage/User/MyParcels1";
import MyReviews from "../pages/DashboardPage/DeliveryMan/MyReviews";
import MyDeliveryList from "../pages/DashboardPage/DeliveryMan/MyDeliveryList";
import BookParcel from "../pages/DashboardPage/User/BookParcel";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import DeliverymanRoute from "./DeliverymanRoute";
import UserRoute from "./UserRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      errorElement:<ErrorPage/>,
      children: [
        {
          index: true,
            element: (<PrivateRoute >
              <AdminRoute>
            <Statistics></Statistics>
            </AdminRoute>
            </PrivateRoute>),
        },
        {
          path:"all-delivery-men",
          element: (<PrivateRoute>
            <AdminRoute>
          <AllDeliveryMan>
          </AllDeliveryMan>
          </AdminRoute>
          </PrivateRoute>),
        },
        {
          path:"all-parcels",
          element: (<PrivateRoute >
            <AdminRoute>
          <AllParcels></AllParcels>
          </AdminRoute>
          </PrivateRoute>),
        },
        {
          path:"all-users",
          element:(<PrivateRoute >
            <AdminRoute>
          <AllUsers></AllUsers>
          </AdminRoute>
          </PrivateRoute>),
           
        },
        // deliveryman
        {
          path:"my-delivery-list",

          element: 
          (<PrivateRoute >
            <DeliverymanRoute>
            <MyDeliveryList></MyDeliveryList>
            </DeliverymanRoute>
            </PrivateRoute>),
        },
        {
          path:"my-reviews",
          element:  (<PrivateRoute >
            <DeliverymanRoute>
            <MyReviews></MyReviews>
            </DeliverymanRoute>
            </PrivateRoute>),
        },
        // user
        {
          path:"book-parcel",
          element: 
          (
            <PrivateRoute >
              <UserRoute>
              <BookParcel></BookParcel>
              </UserRoute>
            </PrivateRoute>
          ),
          
        },
        {
          path:"my-parcels",
          element: (
            <PrivateRoute >
              <UserRoute>
              <MyParcels></MyParcels> 
              </UserRoute>
              </PrivateRoute>
          ),
        },
        {
          path:"my-profile",
          element:(<PrivateRoute >
            <UserRoute>
            <MyProfile></MyProfile>
            </UserRoute>
            </PrivateRoute>
            ),
        },
      ]
    },










    { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  ]);