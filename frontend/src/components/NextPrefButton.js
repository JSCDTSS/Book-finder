
import { useState } from 'react';
import Arrow from '../icons/arrow-right.svg';

export default function NextPrefButton() {

  const [step, setStep] = useState(1);

  function nextStep (value) {
    console.log('nextStep');
    setStep(step + 1);
    console.log(step);
  }

  return <div className="PreviousButton">
    <img src={Arrow} onClick={nextStep} alt="Navigation Button that goes back one page" />
  </div>
}