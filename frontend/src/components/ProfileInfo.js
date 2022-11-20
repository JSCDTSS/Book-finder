
export default function ProfileInfo({profileInfo}){
  function editProfile(){
    console.log('edit profile page')
  }

  return <div className="ProfileInfo">
    <p>{profileInfo.name}</p>
    <img src={profileInfo.imageUrl} />
    <p>Follows</p>
    <p>{profileInfo.following.length}</p>
    <p>Followers</p>
    <p>{profileInfo.followers.length}</p>
    <button onClick={editProfile}>Edit Profile</button>
  </div>
}