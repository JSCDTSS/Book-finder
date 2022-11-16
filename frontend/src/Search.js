import React, { useState } from 'react';
import NavBar from './NavBar';
import './Master.css';


function Search() {

    return (
        <div className="Search">
            <div className="TopContainer">
                <p>this is search page ooo</p>
            </div>
            <div className="MainContainer">
            </div>
            <div className="BottomContainer">
                <NavBar />
            </div>
        </div>
    );
}

export default Search;