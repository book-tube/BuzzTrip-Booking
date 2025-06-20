import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <Link to="/profile">
        My Profile
      </Link>
      <Link to="/bookings">
        Bookings
      </Link>
      <Link to="/search-flights">
        Search Flights
      </Link>
    </nav>
  );
}