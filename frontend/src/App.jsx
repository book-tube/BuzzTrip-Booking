import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import SearchFlights from "./components/SearchFlights.jsx";
import AvailibleFlights from "./components/AvailibleFlights.jsx";
import FlightDetails from "./components/FlightDetails.jsx";
import ChooseSeats from "./components/ChooseSeats.jsx";
import PassengerInformation from "./components/PassengerInformation.jsx";
import Payment from "./components/Payment.jsx";
import BookingConfirmation from "./components/BookingConfirmation.jsx";

function App() {
  const [flightSearch, setFlightSearch] = useState({
    from: "",
    to: "",
    date: "",
    adults: 1,
    children: 0,
  });

  const [FlightID, setFlightID] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/search-flights"
            element={
              <SearchFlights
                onSearch={setFlightSearch}
                searchData={flightSearch}
              />
            }
          />

          <Route
            path="/available-flights"
            element={
              <AvailibleFlights
                flightSearch={flightSearch}
                setFlightID={setFlightID}
              />
            }
          />

          <Route
            path="/flight-details/:id"
            element={<FlightDetails FlightID={FlightID} />}
          />

          <Route
            path="/flight-details/:id/choose-seats"
            element={<ChooseSeats FlightID={FlightID} />}
          />

          <Route
            path="/passenger-information"
            element={<PassengerInformation />}
          />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/booking-confirmation"
            element={<BookingConfirmation />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
