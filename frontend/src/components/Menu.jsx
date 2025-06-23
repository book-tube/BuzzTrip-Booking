import { Link } from "react-router-dom";
import { useState } from "react";
import "/src/styles/Menu.css"

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="menu-nav">
      <div className="menu-logo">
        <img src="frontend/public/BuzzTrip.png" alt="BuzzTrip Logo" />
      </div>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
      {open && (
        <div className="menu-dropdown">
          <Link to="/profile" onClick={() => setOpen(false)}>My Profile</Link>
          <Link to="/bookings" onClick={() => setOpen(false)}>Bookings</Link>
          <Link to="/search-flights" onClick={() => setOpen(false)}>Search Flights</Link>
        </div>
      )}
    </nav>
  );
}
