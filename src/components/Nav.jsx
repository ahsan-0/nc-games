import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/api/categories">Game-Categories</Link>
      <Link to="/api/reviews">Reviews</Link>
      <Link to="/api/users">Users</Link>
    </nav>
  );
}

export default Nav;
