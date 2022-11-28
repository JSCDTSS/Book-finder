import React from 'react';
import Arrow from '../icons/arrow-right.svg';
import '../Master.css';

const BookType = ({ nextStep }) => {

    const next = e => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div className="BookType">
            <div className="TopContainer">
                <p>this is BookPreferences page</p>
            </div>
            <div className="MainContainer">
            </div>
            <div className="BottomContainer">
                <img src={Arrow} onClick={next} alt="Navigation Button that goes back one page" />
            </div>
        </div>
    );
}

export default BookType;