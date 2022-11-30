import { Link, useLocation } from 'react-router-dom';

export default function NavButton({
  path, text, icon, active = true
}) {
  const location = useLocation()

  return <li className={`NavButton ${active ? 'active' : 'inactive'}`}>
    {active
      ? <Link to={path} state={location.state}>
        <img src={icon} alt={text} />
      </Link>
      : <img src={icon} alt={text} />
    }
  </li>



}