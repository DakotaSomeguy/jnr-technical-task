// the header
import Nav from "./Nav";

export default function Header( {isLoggedIn} ) {
  return (
    
    <header>    
      {/* icon */}
      <div id="icon">
        <img src="rocket.svg" alt="Icon" />
      </div>

      <Nav />
    </header>
  );
}
