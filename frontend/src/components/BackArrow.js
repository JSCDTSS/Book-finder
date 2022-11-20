
import { useNavigate } from 'react-router-dom';

export default function BackArrow() {
  const navigate = useNavigate()
  return <div className="BackArrow">
    <button onClick={() => navigate(-1)}>go back</button>
  </div>
}