
import { useNavigate } from 'react-router-dom';
import Arrow from '../icons/arrow-left.svg';

export default function BackArrow() {
  const navigate = useNavigate()
  return <div className="BackArrow">
    <img
      src={Arrow}
      onClick={() => navigate(-1)}
      alt="Navigation Button that goes back one page"
    />
  </div>
}
