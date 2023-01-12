import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/categories">Game-Categories</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Nav;
