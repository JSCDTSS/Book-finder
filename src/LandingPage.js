import { Link } from 'react-router-dom';
import './Master.css'; 
import GuestArrow from'./icons/arrow-right.svg';
import Logo from "./Images/Logo.png"

function LandingPage() {
    return (
        <>
        <div class="TopContainer">
        <div class="IntroWords">
            <p>Start your reading journey</p>
            <p>Be part of our community...</p>
        </div>
        </div>
        <div class="MainContainer">
        <div className="Login">
            <Link to="/LoginForm">
                <button class="LoginButton">Login</button>
            </Link>
        </div>
        <div className="CreateAccount">
            <Link to="/CreateAccountForm">
                <button class="SignUpButton">Sign Up</button>
            </Link>
        </div>
        <div className="GuestLogin">
            <Link to="/Home">
                <button class="GuestButton"><p>Continue as Guest</p><img src={GuestArrow} alt="Guest Account button" /></button>
            </Link>
        </div>
        <div>
            <img src={Logo} alt="Five individuals reading"/>
        </div>
        </div>
        </>
        // TODO: Add arrow to guest button, import is wrong?
    );
}

export default LandingPage;