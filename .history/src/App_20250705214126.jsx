import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([{
  path: '/',
  element: <h1>Welcome to the Home Page</h1>,
},
{
  path: '/about',
  element: <h1>Welcome to the About Page</h1>]);

function App() {
  return (
    <>
      <div>
        <h1>hai</h1>
      </div>
     
    </>
  )
}

export default App
