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
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
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
    tripType: "", // "oneway" or "roundtrip"
  });
  const [flightDetailsID, setFlightDetailsID] = useState(null);
  const [departureFlightID, setDepartureFlightID] = useState(null);
  const [returnFlightID, setReturnFlightID] = useState(null);
  const [departureSelectedSeats, setDepartureSelectedSeats] = useState([]);
  const [returnSelectedSeats, setReturnSelectedSeats] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <>
      <Menu isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="*" element={<Navigate to="/search-flights" replace />} />{" "}
        // Redirect to search flights if no path matches

        <Route
         path="/log-in" 
         element={
            <LogIn 
            setIsLoggedIn={setIsLoggedIn} 
            />
          }    
         />

        <Route 
        path="/sign-up" 
        element={
            <SignUp 
              setIsLoggedIn={setIsLoggedIn}
            />
          }   
        />

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
              setFlightDetailsID={setFlightDetailsID}
              setDepartureFlightID={setDepartureFlightID}
              departureFlightID={departureFlightID}
            />
          }
        />

        <Route
          path="/flight-details/:id"
          element={
            <FlightDetails
              flightSearch={flightSearch}
              setFlightDetailsID={setFlightDetailsID}
              flightDetailsID={flightDetailsID}
            />
          }
        />

        <Route
          path="/:id/choose-seats"
          element={
            <ChooseSeats
              passengerCount={
                (flightSearch?.adults ?? 0) + (flightSearch?.children ?? 0)
              }
              flightDetailsID={flightDetailsID}
              departureSelectedSeats={departureSelectedSeats}
              setDepartureSelectedSeats={setDepartureSelectedSeats}
              setReturnSelectedSeats={setReturnSelectedSeats}
              returnSelectedSeats={returnSelectedSeats}
              setDepartureFlightID={setDepartureFlightID}
              departureFlightID={departureFlightID}
              returnFlightID={returnFlightID}
              setReturnFlightID={setReturnFlightID}
              flightSearch={flightSearch}
            />
          }
        />

        <Route
          path="/passenger-information"
          element={
            <PassengerInformation
              flightSearch={flightSearch}
              departureFlightID={departureFlightID}
              returnFlightID={returnFlightID}
              departureSelectedSeats={departureSelectedSeats}
              returnSelectedSeats={returnSelectedSeats}
            />
          }
        />

        <Route 
        path="/payment" 
        element={
            <Payment 
            />
          } 
        />

        <Route
          path="/booking-confirmation"
          element={
            <BookingConfirmation 
              departureFlightID={departureFlightID} 
            />
          }
        />

        <Route 
        path="/profile" 
        element={
            <Profile 

            />
          } 
        />

        <Route 
        path="/bookings" 
        element={
            <Bookings 
            />
          } 
        />
        
      </Routes>
    </>
  );
}
