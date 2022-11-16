import React, { useState } from 'react';
import NavBar from './NavBar';
import './Master.css';


function Bookshelves() {

    return (
        <div className="Bookshelves">
            <div className="TopContainer">
                <p>this is Bookshelves page</p>
            </div>
            <div className="MainContainer">
            </div>
            <div className="BottomContainer">
                <NavBar />
            </div>
        </div>
    );
}

export default Bookshelves;