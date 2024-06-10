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
import MyParcels from "../pages/DashboardPage/User/MyParcels";
import MyReviews from "../pages/DashboardPage/DeliveryMan/MyReviews";
import MyDeliveryList from "../pages/DashboardPage/DeliveryMan/MyDeliveryList";
import BookParcel from "../pages/DashboardPage/User/BookParcel";


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
            element: <Statistics></Statistics>
        },
        {
          path:"all-delivery-men",
          element: <AllDeliveryMan></AllDeliveryMan>
        },
        {
          path:"all-parcels",
          element: <AllParcels></AllParcels>
        },
        {
          path:"all-users",
          element: <AllUsers></AllUsers>
        },
        // deliveryman
        {
          path:"my-delivery-list",
          element: <MyDeliveryList></MyDeliveryList>
        },
        {
          path:"my-reviews",
          element: <MyReviews></MyReviews>
        },
        // user
        {
          path:"book-parcel",
          element: <BookParcel></BookParcel>
        },
        {
          path:"my-parcels",
          element: <MyParcels></MyParcels>
        },
        {
          path:"my-profile",
          element: <MyProfile></MyProfile>
        },
      ]
    },










    { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  ]);