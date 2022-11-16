import { Link } from 'react-router-dom';
import HomeIcon from'./icons/home-alt.svg';
import SearchIcon from'./icons/search.svg';
import BookmarkIcon from'./icons/bookmark.svg';
import ProfileIcon from'./icons/profile.svg';

function NavBar() {
    return (
        <>
        <div className="NavBar">
            <li>
            <Link to="/Home">
                <button>Home</button><img src={HomeIcon}/>
            </Link>
            </li>
            <li>
            <Link to="/Search">
                <button>Search</button><img src={SearchIcon}/>
            </Link>
            </li>
            <li>
            <Link to="/BookShelves">
                <button>My Books</button><img src={BookmarkIcon}/>
            </Link>
            </li>
            <Link to="/Profile">
                <button>My Profile</button><img src={ProfileIcon}/>
            </Link>
        </div>
        </>
    );
}

export default NavBar;