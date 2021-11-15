import { Link } from "react-router-dom";

const NotFound = () => {
    return (<>
        <p>
            404.That’s an error.
            <br />
            The requested was not found on this server. That’s all we know.
        </p>
        <Link to='/'>Go to Home page</Link>
    </>);
}

export default NotFound;