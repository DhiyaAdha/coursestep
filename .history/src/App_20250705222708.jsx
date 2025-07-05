
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
  EditCourse
} from './pages';

const router = createBrowserRouter([
  {
  path: '/',
  element: 
    <DashboardLayout />,
},
{
  path: '/register',
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
