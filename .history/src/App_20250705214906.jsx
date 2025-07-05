import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
  path: '/',
  element: 
    <h1>Home Page</h1>,
},
{
  path: '/about',
  element: (<div>
    <h1>About Us</h1>
  </div>
  ),
}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App
