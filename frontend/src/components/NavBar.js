import { useLocation } from 'react-router-dom';
import HomeIcon from '../icons/home-alt.svg';
import SearchIcon from '../icons/search.svg';
import BookmarkIcon from '../icons/bookmark.svg';
import ProfileIcon from '../icons/profile.svg';
import NavButton from './NavButton';

function NavBar() {
  const location = useLocation()
  const permissions = location.state.permissions
  console.log(permissions)
  const isModerator = permissions.includes('moderator')
  const isMember = permissions.includes('member')

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
            path="/Bookshelves" text="My Books" icon={BookmarkIcon} active={isMember}
          />
          <NavButton
            path="/Profile" text="My Profile" icon={ProfileIcon} active={isMember}
          />
          {isModerator && <NavButton
            path="/Moderation" text="Moderator" icon={ProfileIcon}
          />}
        </ul>
      </div>
    </>
  );
}


export default NavBar;