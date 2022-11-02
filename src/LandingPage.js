import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <>
        <div className="LoginButton">
            <Link to="/LoginForm">
                <button>Login</button>
            </Link>
        </div>
        <div className="CreateAccountButton">
            <Link to="/CreateAccountForm">
                <button>Sign Up</button>
            </Link>
        </div>
        </>
        // TODO: Add button(text) to Continue as Guest, with arrow picture
    );
}

export default LandingPage;