
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// page import - index.js
import {
  Header,
  Footer,
  DashboardLayout,
  AllCourse,
  AddCourse,
  DeleteCourse,
  EditCourse,
  Register,
  Login,

} from './pages';
import Register from "./pages/auth/Register";

const router = createBrowserRouter([
  {
  path: '/',
  element: 
    <DashboardLayout />,
},
{
  path: '/register',
  element: <Register />,
},
{
  path: '/login',
  element: <Login/>,
},

]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App
