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
          <NavLink to="/my-tokens">MyTokens</NavLink>
        </li>
      </ul>
    </nav>
  ) 
}
