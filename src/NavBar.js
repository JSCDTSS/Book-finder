import { Link } from 'react-router-dom';

//navigation bar

function NavBar() {
    return (
        <>
        <div className="NavBar">
            <li>
            <Link to="/Home">
                <button>Home</button>
            </Link>
            </li>
            <li>
            <Link to="/Search">
                <button>Search</button>
            </Link>
            </li>
            <li>
            <Link to="/MyBooks">
                <button>My Books</button>
            </Link>
            </li>
            <Link to="/MyProfile">
                <button>My Profile</button>
            </Link>
            <li>
            <Link to="/LoginForm">
                <button>Login</button>
            </Link>
            </li>
        </div>
        </>
    );
}