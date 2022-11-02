import { Link } from 'react-router-dom';
import './Master.css'; 

function LandingPage() {
    return (
        <>
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
        </>
        // TODO: Add button(text) to Continue as Guest, with arrow picture
    );
}

export default LandingPage;