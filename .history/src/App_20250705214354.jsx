import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([{
  path: '/',
  element: (<h1>Welcome to the Home Page</h1> ),
},
{
  path: '/about',
  element: (<),
}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
