/* First Spash Page Attempt */
import React, {component} from 'react';
import auth0Client from '../Auth';
import '.spash-screen.css';

function LoadingMessage () {
    return (
        <div className= "spash-screen">
            Welcome to ShelfElf, the app is just loading.
            <div className="loading-dot">.</div>
        </div>
    );
}

function withSplashScreen (WrappedComponent) {
    return className extends component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

async componentDidMount () {
    try {
        await auth0Client.loadsession();
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 1500)
    } catch (err) {
        console.log(err);
        this.setState({
            loading: false,
        });
    }
}

render() {
    // while checking user session, show "loading" message
    if (this.state.loading) return LoadingMessage();

    // Otherwise, show the desired route
    return <WrappedComponent {...this.props} />;
        }
    };
}

export default withSplashScreen;