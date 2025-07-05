import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([{
  path: '/',
  element: (<div></div><h1>Welcome to the Home Page</h1> ),
},
{
  path: '/about',
  element: (<div>
    <h1>About Us</h1>
  </div>),
}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
