
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// page import - index.js
import {
  Header,
  Footer,
  HomeLayout,
  DashboardLayout,
  AllCourse,
  AddCourse,
  DeleteCourse,
  EditCourse,
  Register,
  Login,
} from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        {
          path: "/dashboard",
          element: <DashboardLayout />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
  }
  
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App
