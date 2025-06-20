import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchFlights({ setFlightSearch, flightSearch }) {

  const [from, setFrom] = useState(flightSearch.from || "");
  const [to, setTo] = useState(flightSearch.to || "");
  const [date, setDate] = useState(flightSearch.date || "");
  const [adults, setAdults] = useState(flightSearch.adults || 1);
  const [children, setChildren] = useState(flightSearch.children || 0);



  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!from || !to || !date) {
      console.error("Please fill in all fields.");
      return;
    }

    setFlightSearch({ from, to, date, adults, children });
    navigate("/available-flights");
  };

  return (
    <div className="search-flights">
      <h1>Search Flights</h1>
      <form onSubmit={handleSubmit}>
        <label>
          From:
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </label>
        <label>
          To:
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </label>
        <label>
          Departure Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <div className="passengers">
          <label>
            Adults (12+ years):
            <input
              type="number"
              min="1"
              max="9"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              required
            />
          </label>
          <label>
            Children (2-11 years):
            <input
              type="number"
              min="0"
              max="9"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
            />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
