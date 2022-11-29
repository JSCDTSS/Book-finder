import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../Master.css';


function Bookshelves() {

    return (
        <div className="Bookshelves">
            <div className="TopContainer">
                <h2>My Bookshelves</h2>
                <p>All your favourite books in one place...</p>
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