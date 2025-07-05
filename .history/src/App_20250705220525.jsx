
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// PAGE IMPORT
import DashboardLayout from "./pages/dashboard/course/DashboardLayout.jsx";  
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";


const router = createBrowserRouter([
  {
  path: '/',
  element: 
    <DashboardLayout />,
},
{
  path: '/about',
  element: (
  <div>
    <h1>About Us</h1>
  </div>
  ),
}
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App
