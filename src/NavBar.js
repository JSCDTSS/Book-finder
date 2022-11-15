import { Link } from 'react-router-dom';

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
            <Link to="/BookShelves">
                <button>My Books</button>
            </Link>
            </li>
            <Link to="/Profile">
                <button>My Profile</button>
            </Link>
        </div>
        </>
    );
}

export default NavBar;