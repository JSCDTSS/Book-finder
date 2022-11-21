/* First Spash Page Attempt */
import React, {useState, useEffect} from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";
import '../Master.css';

const App = () => {

    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

    return isLoading ?

    <PacmanLoader color={'#36D7B7'} isLoading={isLoading}
        css={override} size={150} /> :
    <h1 className="App">
        {/* This is Main Page */}
        {<ClockLoader color={'#36D7B7'} isLoading={isLoading}
        css={override} size={150} />}
    </h1>
}

export default App;