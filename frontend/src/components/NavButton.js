import { Link } from 'react-router-dom';

export default function NavButton({
  path, text, icon
}) {
  return <li>
    <Link to={path}>
      <button>{text}</button><img src={icon} />
    </Link>
  </li>
}