import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import SearchFlights from "./components/SearchFlights";
import AvailableFlights from "./components/AvailableFlights";
import FlightDetails from "./components/FlightDetails";
import ChooseSeats from "./components/ChooseSeats";
import PassengerInformation from "./components/PassengerInformation";
import Payment from "./components/Payment";
import BookingConfirmation from "./components/BookingConfirmation";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Bookings from "./components/Bookings";

export default function App() {
  const [flightSearch, setFlightSearch] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    adults: 1,
    children: 0,
    tripType: "",
  });
  const [flightDetailsID, setFlightDetailsID] = useState(null);
  const [departureFlightID, setDepartureFlightID] = useState(null);
  const [returnFlightID, setReturnFlightID] = useState(null);
  const [departureSelectedSeats, setDepartureSelectedSeats] = useState([]);
  const [returnSelectedSeats, setReturnSelectedSeats] = useState([]);

  return (
    <>
      <Menu />
      <Routes>
        <Route path="*" element={<Navigate to="/search-flights" replace />} />{" "}
        // Redirect to search flights if no path matches
        <Route
          path="/search-flights"
          element={
            <SearchFlights
              setFlightSearch={setFlightSearch}
              flightSearch={flightSearch}
            />
          }
        />
        <Route
          path="/available-flights"
          element={
            <AvailableFlights
              flightSearch={flightSearch}
            />
          }
        />
        <Route
          path="/flight-details/:id"
          element={
            <FlightDetails flightID={flightID} flightSearch={flightSearch} />
          }
        />
        <Route
          path="/:id/choose-seats"
          element={
            <ChooseSeats
              passengerCount={
                (flightSearch?.adults ?? 0) + (flightSearch?.children ?? 0)
              }
              setSelectedSeats={setSelectedSeats}
              selectedSeats={selectedSeats}
              setReturnSeats={setReturnSeats}
              returnSeats={returnSeats}
              flightID={flightID}
              flightSearch={flightSearch}
            />
          }
        />
        <Route
          path="/passenger-information"
          element={
            <PassengerInformation
              flightSearch={flightSearch}
              selectedSeats={selectedSeats}
            />
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmation flightID={flightID} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </>
  );
}
