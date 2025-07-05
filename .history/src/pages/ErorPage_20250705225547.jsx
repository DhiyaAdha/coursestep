import { Link } from 'react-router-dom';
// import { useRouteError } from "react-router-dom";

const ErorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
      <div>
        <h1>404 Not Found</h1>
        <br />
        <p>The page you are looking for does not exist.</p>
        <br />
        <Link to="/">Go to Home</Link>
      </div>
    );
 }
export default ErorPage;