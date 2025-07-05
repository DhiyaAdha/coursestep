
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// page import
import {
  Header,
  Footer,
  Dash
  AllCourse,
  AddCourse,
  DeleteCourse,
  EditCourse
}


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
