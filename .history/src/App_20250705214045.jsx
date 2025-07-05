import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
}]);

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
