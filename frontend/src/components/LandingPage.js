import { Link } from 'react-router-dom';
import '../Master.css'; 
import GuestArrow from'../icons/arrow-right.svg';
import Logo from "../Images/Logo.png"
import SplashPage from "./SplashPage"

function LandingPage() {
    return (
        <>
        {/* <SplashPage/> */}
        <div className="TopContainer">
        <div className="IntroWords">
            <p>Start your reading journey</p>
            <p>Be part of our community...</p>
        </div>
        </div>
        <div className="MainContainer">
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
            <Link to="/app">
                <button className="GuestButton"><p>Continue as Guest</p><img src={GuestArrow} alt="Guest Account button" /></button>
            </Link>
        </div>
        <div>
            <img src={Logo} alt="Five individuals reading"/>
        </div>
        </div>
        </>
    );
}

export default LandingPage;