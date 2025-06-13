import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchFlights( {onSearch, searchData} ) {
  const [airports, setAirports] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!from || !to || !date) {
      console.error("Please fill in all fields.");
      return;
    }

    onSearch({ from, to, date });
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
