import { NavLink } from "react-router-dom";

// navigation links
export default function Nav({isLoggedIn}) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/MyTokens">MyTokens</NavLink>
        </li>
      </ul>
    </nav>
  ) 
}
