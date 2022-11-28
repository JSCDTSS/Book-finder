import React, { useState } from 'react';
import '../Master.css';
import PreviousButton from '../components/NextPrefButton';
import BookPreferences from './BookPreferences';
import BookType from './BookType';
import BookGenre from './BookGenre';
import BookPages from './BookPages';

export default function BookLanding() {

    const [step, setStep] = useState(1);

    /*
    function nextStep() {
        console.log('nextStep');
        setStep(step + 1);
        console.log(step);
    }
    */

    function prevStep() {
        console.log('prevStep');
        setStep(step - 1);
        console.log(step);
    }
    

    function handleChange(input) {
        return function (e) {
            console.log('handleChange');
            setStep({ [input]: e.target.value });
            console.log(step);
        }
    }

    const [values, setValues] = { BookPreferences, BookType, BookGenre, BookPages };

    switch (step) {
        case 1:
            return (
                <BookPreferences
                    setStep={setStep}
                />
            )
        case 2:
            return (
                <BookType
                setStep={setStep}
                handleChange={handleChange}
                    values={values}
                />
            )
        case 3:
            return (
                <BookGenre
                setStep={setStep}
                prevStep={prevStep}
                    handleChange={handleChange}
                    values={values} />
            )
        case 4:
            return (
                <BookPages
                setStep={setStep}
                prevStep={prevStep}
                    handleChange={handleChange}
                    values={values} />
            )
            {/*}
            case 4:
                return (
                    <Success />
                )
                */}
        default:


    }
}