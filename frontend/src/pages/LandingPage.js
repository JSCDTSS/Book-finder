import { Link } from 'react-router-dom';
import '../Master.css';
import GuestArrow from '../icons/arrow-right.svg';
// import SplashPage from "./SplashPage"

function LandingPage() {
  return (
    <>
      {/* <SplashPage/> */}
      <div className="TopContainer">
        <div className="IntroWords">
          <h1>Start your reading journey</h1>
          <p>Be part of our community...</p>
        </div>
      </div>
      <div className="LandingBackImage">
        <div className="MainContainer">
          <div className="FormInner">

            <div className="Login">
              <Link to="/LoginForm">
                <button className="LoginButton">Login</button>
              </Link>
            </div>

            <div className="CreateAccount">
              <Link to="/CreateAccountForm">
                <button className="SignUpButton">Sign Up</button>
              </Link>
            </div>

            <div className="GuestLogin">
              <Link to="/Home" state={{ permissions: ['basic'] }}>
                <button className="GuestButton">
                  <p>Continue as Guest</p>
                  <img src={GuestArrow} alt="Guest Account button" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;