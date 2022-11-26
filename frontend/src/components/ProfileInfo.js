
import { Link, useLocation } from 'react-router-dom';

export default function ProfileInfo() {
  const location = useLocation()

  return <div className="ProfileInfo">
    <p>{location.state.username}</p>
    <p>Follows: {location.state.following.length}</p>
    <p>Followers: {location.state.followedBy.length}</p>


    <Link to='/EditProfile' state={location.state}>
      <button className='EditProfile'>Edit Profile</button>
    </Link>
  </div>
}