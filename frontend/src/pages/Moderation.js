
import CheckPermission from "../components/CheckPermission"
import ListUsers from "../components/ListUsers"
import NavBar from "../components/NavBar"

export default function Moderation() {

  return <CheckPermission permission='moderator' redirect='/Home'>
    <div className="Bookshelves">
      <div className="TopContainer">
        <p>Moderation Page</p>
      </div>
      <div className="MainContainer">
        <ListUsers />


      </div>
      <div className="BottomContainer">
        <NavBar />
      </div>
    </div>
  </CheckPermission>
}

/**
 * moderators should be able to ban / unban users
 * component to search for users
 * allow selection of user, get their info
 * button to ban user
 * change flag on the account object
 * if a banned user tries to log on, give an error message
 * 
 */