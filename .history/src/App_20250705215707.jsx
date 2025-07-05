
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// PAGE IMPORT
import DashboardLayout from "./pages/DashboardLayout.jsx";  

const router = createBrowserRouter([
  {
  path: '/',
  element: 
    <h1>Home Page</h1>,
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
