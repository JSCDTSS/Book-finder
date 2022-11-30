
import { Link, useLocation } from 'react-router-dom';
import ProfileImage from '../icons/profile.svg';

export default function ProfileInfo() {
  const location = useLocation()

  return <div className="ProfileInfo">
    <img className="ProfileImage" src={ProfileImage} alt="Profile Image" />
    <div ClassName="ProfileInfoText">
      <h3>{location.state.username}</h3>
      <p>Follows: {location.state.following.length}</p>
      <p>Followers: {location.state.followedBy.length}</p>
      <Link to='/EditProfile' state={location.state}>
        <button className='EditProfile'>Edit Preferences</button>
      </Link>
    </div>
  </div>
}