import { Link } from 'react-router-dom';

export default function NavButton({
  path, text, icon
}) {
  return <li>
    <Link to={path} state={{ state: 'test' }}>
      <img src={icon} alt={text}/>
    </Link>
  </li>
}