import { useLocation } from 'react-router-dom';
import HomeIcon from '../icons/home-alt.svg';
import SearchIcon from '../icons/search.svg';
import BookmarkIcon from '../icons/bookmark.svg';
import ProfileIcon from '../icons/profile.svg';
import NavButton from './NavButton';

function NavBar() {
  const location = useLocation()
  console.log(location.state)
  const permissions = location.state.permissions

  return (
    <>
      <div className="NavBar">
        <ul>
          <NavButton
            path="/Home" text="Home" icon={HomeIcon}
          />
          <NavButton
            path="/Search" text="Search" icon={SearchIcon}
          />
          <NavButton
            path="/Bookshelves" text="My Books" icon={BookmarkIcon} 
            active={true}
          />
          <NavButton
            path="/Profile" text="My Profile" icon={ProfileIcon}
          />
          {permissions.includes('moderator') ?? <NavButton
            path="/Moderation" text="Moderator" icon={ProfileIcon}
          />}

        </ul>
      </div>
    </>
  );
}


export default NavBar;