
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// page import - index.js
import {
  Header,
  Footer,
  ErorPage,
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
    errorElement: <ErorPage />,
    // start children
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "erorpage",
        element: <ErorPage />,
      }
    ],
    // end children
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App
