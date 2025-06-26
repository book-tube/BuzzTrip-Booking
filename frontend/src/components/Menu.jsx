import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Pfad ggf. anpassen
import "/src/styles/Menu.css";

export default function Menu({ isLoggedIn }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setOpen(false);
      navigate("/log-in");
    } catch (error) {
      console.error("Logout fehlgeschlagen:", error);
      alert("Fehler beim Logout");
    }
  };

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
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
