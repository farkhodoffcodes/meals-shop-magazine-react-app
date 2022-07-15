import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="./About">About</Link>
          </li>
          <li>
            <Link to="./Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
