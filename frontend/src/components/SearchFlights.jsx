import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const airports = [
  { code: "LHR", name: "London Heathrow", city: "London", country: "UK" },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris", country: "France" },
  {
    code: "FRA",
    name: "Frankfurt Airport",
    city: "Frankfurt",
    country: "Germany",
  },
  {
    code: "JFK",
    name: "John F. Kennedy International",
    city: "New York",
    country: "USA",
  },
  {
    code: "LAX",
    name: "Los Angeles International",
    city: "Los Angeles",
    country: "USA",
  },
  {
    code: "ZRH",
    name: "Zürich Flughafen",
    city: "Zürich",
    country: "Switzerland",
  },
  {
    code: "AMS",
    name: "Amsterdam Schiphol",
    city: "Amsterdam",
    country: "Netherlands",
  },
  { code: "DXB", name: "Dubai International", city: "Dubai", country: "UAE" },
  { code: "HND", name: "Tokyo Haneda", city: "Tokyo", country: "Japan" },
  {
    code: "SIN",
    name: "Singapore Changi",
    city: "Singapore",
    country: "Singapore",
  },
  {
    code: "IST",
    name: "Istanbul Airport",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    code: "BCN",
    name: "Barcelona-El Prat",
    city: "Barcelona",
    country: "Spain",
  },
  {
    code: "VIE",
    name: "Vienna International",
    city: "Vienna",
    country: "Austria",
  },
  { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
  {
    code: "GRU",
    name: "São Paulo–Guarulhos",
    city: "São Paulo",
    country: "Brazil",
  },
];

export default function SearchFlights({ setFlightSearch, flightSearch }) {
  const [from, setFrom] = useState(flightSearch.from || "");
  const [to, setTo] = useState(flightSearch.to || "");
  const [departureDate, setDepartureDate] = useState(flightSearch.departureDate || "");
  const [adults, setAdults] = useState(flightSearch.adults || 1);
  const [children, setChildren] = useState(flightSearch.children || 0);
  const [tripType, setTripType] = useState(flightSearch.tripType || "oneway");
  const [returnDate, setReturnDate] = useState(flightSearch.returnDate || "");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!from || !to || !departureDate || (tripType === "roundtrip" && !returnDate)) {
      console.error("Please fill in all fields.");
      return;
    }

    setFlightSearch({ from, to, departureDate, adults, children, returnDate, tripType });
    navigate("/available-flights");
  };

  return (
    <>
      <div className="search-flights">
        <h1>Search Flights</h1>
        <form onSubmit={handleSubmit}>
          <label>
            From:
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            >
              <option value="">Select an airport</option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.name}>
                  {airport.name} ({airport.city}, {airport.country})
                </option>
              ))}
            </select>
          </label>
          <label>
            To:
            <select value={to} onChange={(e) => setTo(e.target.value)} required>
              <option value="">Select an airport</option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.name}>
                  {airport.name} ({airport.city}, {airport.country})
                </option>
              ))}
            </select>
          </label>
          <fieldset className="trip-type-group">
            <legend>Trip Type:</legend>
            <div className="trip-options">
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="oneway"
                  checked={tripType === "oneway"}
                  onChange={(e) => setTripType(e.target.value)}
                />
                One Way
              </label>
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="roundtrip"
                  checked={tripType === "roundtrip"}
                  onChange={(e) => setTripType(e.target.value)}
                />
                Round Trip
              </label>
            </div>
          </fieldset>

          <label>
            Departure Date:
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </label>
          {tripType === "roundtrip" && (
            <label>
              Return Date:
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required={tripType === "roundtrip"}
              />
            </label>
          )}

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

      <div className="recommended-destinations">
        <h2>Recommended Destinations</h2>
        <div className="destination-list">
          <div className="destination-card">
            <img src="/images/paris.jpg" alt="Paris" />
            <p>Paris</p>
          </div>
          <div className="destination-card">
            <img src="/images/dubai.jpg" alt="Dubai" />
            <p>Dubai</p>
          </div>
          <div className="destination-card">
            <img src="/images/tokyo.jpg" alt="Tokyo" />
            <p>Tokyo</p>
          </div>
        </div>
      </div>
    </>
  );
}
