import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

/* Slider settings */

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};
const destinations = [
  {
    name: "Paris",
    image:
      "https://cdn.pixabay.com/photo/2017/01/03/22/00/tower-1950742_1280.jpg",
  },
  {
    name: "Dubai",
    image:
      "https://cdn.pixabay.com/photo/2020/03/19/18/29/camel-4948299_1280.jpg",
  },
  {
    name: "Tokyo",
    image:
      "https://cdn.pixabay.com/photo/2019/08/28/14/24/tokyo-4436914_1280.jpg",
  },
  {
    name: "New York",
    image:
      "https://cdn.pixabay.com/photo/2016/01/02/16/20/new-york-1118418_1280.jpg",
  },
  {
    name: "Barcelona",
    image:
      "https://cdn.pixabay.com/photo/2020/03/03/17/53/barcelona-4899368_1280.jpg",
  },
  {
    name: "London",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/05/19/cathedral-6539937_1280.jpg",
  },
  {
    name: "Zürich",
    image:
      "https://cdn.pixabay.com/photo/2020/05/13/14/02/zurich-5167574_1280.jpg",
  },
  {
    name: "Amsterdam",
    image:
      "https://cdn.pixabay.com/photo/2020/07/03/16/42/amsterdam-5367020_1280.jpg",
  },
  {
    name: "Singapore",
    image:
      "https://cdn.pixabay.com/photo/2017/07/31/06/20/singapore-2556628_1280.jpg",
  },
  {
    name: "Istanbul",
    image:
      "https://cdn.pixabay.com/photo/2019/06/30/09/31/istanbul-4307665_1280.jpg",
  },
  {
    name: "Frankfurt",
    image:
      "https://cdn.pixabay.com/photo/2022/03/26/10/55/building-7092747_1280.jpg",
  },
  {
    name: "Los Angeles",
    image:
      "https://cdn.pixabay.com/photo/2017/06/29/19/57/beverly-hills-hotel-2455977_1280.jpg",
  },
  {
    name: "Vienna",
    image:
      "https://cdn.pixabay.com/photo/2017/01/23/21/05/castle-2003867_1280.jpg",
  },
  {
    name: "Munich",
    image:
      "https://cdn.pixabay.com/photo/2015/06/05/16/47/munich-798652_1280.jpghttps://cdn.pixabay.com/photo/2015/06/05/16/47/munich-798652_1280.jpg",
  },
  {
    name: "São Paulo",
    image:
      "https://cdn.pixabay.com/photo/2016/02/17/22/46/buildings-1206160_1280.jpg",
  },
];

/* ---------------------*/

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
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!from || !to || !departureDate || (tripType === "roundtrip" && !returnDate)) {
      console.error("Please fill in all fields.");
      return;
    }

    setFlightSearch({
      from,
      to,
      departureDate,
      adults,
      children,
      returnDate,
      tripType,
    });

    console.log("Flight search submitted:", { from, to });
    navigate("/available-flights");
  };

  return (
    <>
      <div className="search-flights">
        <h1>Search Flights</h1>
        <form onSubmit={handleSubmit}>
          {/* FROM */}
          <label>
            From:
            <select value={from} onChange={(e) => setFrom(e.target.value)} required>
              <option value="">Select an airport</option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name} ({airport.city}, {airport.country})
                </option>
              ))}
            </select>
          </label>

          {/* TO */}
          <label>
            To:
            <select value={to} onChange={(e) => setTo(e.target.value)} required>
              <option value="">Select an airport</option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name} ({airport.city}, {airport.country})
                </option>
              ))}
            </select>
          </label>

          {/* TRIP TYPE */}
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

          {/* DATES */}
          <label>
            Departure Date:
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              min={today}
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
                min={departureDate}
                required
              />
            </label>
          )}

          {/* PASSENGERS */}
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

      {/* Recommended Destinations */}
      <div className="recommended-destinations">
        <h2>Recommended Destinations</h2>
        <Slider {...settings}>
          {destinations.map((dest) => (
            <div key={dest.name}>
              <div className="destination-card">
                <img src={dest.image} alt={dest.name} />
                <p>{dest.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
