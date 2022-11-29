
import CheckPermission from "../components/CheckPermission"
import NavBar from "../components/NavBar"

export default function Moderation() {

  return <CheckPermission permission='moderator' redirect='/Home'>
    <div className="Bookshelves">
      <div className="TopContainer">
        <p>flargablarg</p>
      </div>
      <div className="MainContainer">
      </div>
      <div className="BottomContainer">
        <NavBar />
      </div>
    </div>
  </CheckPermission>
}