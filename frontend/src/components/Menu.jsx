import { Link } from "react-router-dom";
import { useState } from "react";
import "/src/styles/Menu.css";

export default function Menu({ isLoggedIn }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="menu-nav">
      <div className="menu-logo">
        <img src="/BuzzTrip.png" alt="BuzzTrip Logo" className="menu-logo-img" />
      </div>
      <div className="navbar-logo">Buzz⚡Trip Booking</div>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
      {open && (
        <div className="menu-dropdown">
          <Link to="/search-flights" onClick={() => setOpen(false)}>
            Search Flights
          </Link>

          {!isLoggedIn && (
            <Link to="/log-in" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}

          {isLoggedIn && (
            <>
              <Link to="/profile" onClick={() => setOpen(false)}>
                My Profile
              </Link>
              <Link to="/bookings" onClick={() => setOpen(false)}>
                Bookings
              </Link>
              <Link to="/logout" onClick={() => setOpen(false)}>
                Logout
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
