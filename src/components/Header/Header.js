import { Link } from "react-router-dom";
import "./Header.css"

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  return (
    <header>
      <h1>Lilliana Smith</h1>
      <nav>
        <Link to="/">
          <div>ABOUT ME</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

