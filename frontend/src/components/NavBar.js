import { Link } from 'react-router-dom';
import HomeIcon from '../icons/home-alt.svg';
import SearchIcon from '../icons/search.svg';
import BookmarkIcon from '../icons/bookmark.svg';
import ProfileIcon from '../icons/profile.svg';
import NavButton from './NavButton';

function NavBar() {
  return (
    <>
      <div className="NavBar">
        <NavButton
          path="/Home" text="Home" icon={HomeIcon}
        />
        <NavButton
          path="/Search" text="Search" icon={SearchIcon}
        />
        <NavButton
          path="/Bookshelves" text="My Books" icon={BookmarkIcon}
        />
        <NavButton
          path="/Profile" text="My Profile" icon={ProfileIcon}
        />
      </div>
    </>
  );
}


export default NavBar;