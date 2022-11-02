import { Link } from 'react-router-dom';
import './Master.css'; 
import GuestArrow from'./icons/arrow-right-o.svg';

function LandingPage() {
    return (
        <>
        <div className="IntroWords">
            <p>Start your reading journey</p>
            <p>Be part of our community...</p>
        </div>
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
                <button class="GuestButton">Continue as Guest</button>
            </Link>
        </div>
        </>
        // TODO: Add arrow to guest button, import is wrong?
    );
}

export default LandingPage;