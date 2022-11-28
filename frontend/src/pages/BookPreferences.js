import React from 'react';
import Arrow from '../icons/arrow-right.svg';
import '../Master.css';

const BookPreferences = ( {setStep} ) => {

    return (
        <div className="BookPreferences">
            <div className="TopContainer">
                <p>this is BookPreferences page</p>
            </div>
            <div className="MainContainer">
            </div>
            <div className="BottomContainer">
                <img src={Arrow} onClick={() => setStep(2)} alt="Navigation Button that goes back one page" />
                {/* 
                READ ME:
                =
                =
                =
                =
                =
                pass function through functional componant
                https://codesandbox.io/s/little-leftpad-3owuu?file=/src/components/Term.js

                broken 1
                https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968
                =
                =
                =
                =
                =
                =
                =
                =
                */}
            </div>
        </div>
    );
}

export default BookPreferences;