import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AvailableFlights({ flightSearch, setFlightDetailsID, departureFlightID, setDepartureFlightID }) {
  const [isReturnPhase, setIsReturnPhase] = useState(departureFlightID ? true : false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/search-flights");
  };

  const handleFlightDetailsSelection = (flightDetailsID) => {
    navigate(`/flight-details/${flightDetailsID}`);
    setFlightDetailsID(flightDetailsID);
  }



  return (
    <div className="AvailableFlights">
      <h1>{isReturnPhase ? "Available Return-Flights" : "Available Flights"}</h1>

      <h2>
        Flights from {isReturnPhase ? flightSearch.to : flightSearch.from} to {isReturnPhase ? flightSearch.from : flightSearch.to}
      </h2>

      <div className="DateSelection">
        <div className="User-Selection-yesterday">
          {/* One day before the selected date */}
        </div>

        <div className="User-Selected-Date"> {flightSearch.date} </div>

        <div className="User-Selection-tomorrow">
          {/* One day after the selected date */}
        </div>
      </div>

      <div className="Flight-List">

        <div
          className="Flight-Item"
          onClick={() => handleFlightDetailsSelection("ZH1AB2")}
        >
          <h2>Flight 1</h2>
          <p>From: {isReturnPhase ? flightSearch.to : flightSearch.from}</p>
          <p>To: {isReturnPhase ? flightSearch.from : flightSearch.to}</p>
          <p>Departure: 10:00 AM</p>
          <p>Arrival: 12:00 PM</p>
        </div>

        <div
          className="Flight-Item"
          onClick={() => handleFlightDetailsSelection("ZH1AB3")}
        >
          <h2>Flight 2</h2>
          <p>From: {isReturnPhase ? flightSearch.to : flightSearch.from}</p>
          <p>To: {isReturnPhase ? flightSearch.from : flightSearch.to}</p>
          <p>Departure: 1:00 PM</p>
          <p>Arrival: 3:00 PM</p>
        </div>
        <div
          className="Flight-Item"
          onClick={() => handleFlightDetailsSelection("ZH1AB4")}
        >
          <h2>Flight 3</h2>
          <p>From: {isReturnPhase ? flightSearch.to : flightSearch.from}</p>
          <p>To: {isReturnPhase ? flightSearch.from : flightSearch.to}</p>
          <p>Departure: 4:00 PM</p>
          <p>Arrival: 6:00 PM</p>
        </div>
      </div>

      <button onClick={handleBack} className="back-button">
        Back to Search
      </button>

      <button style={{ display: isReturnPhase ? "block" : "none" }} onClick={() => {
        navigate(`/${departureFlightID}/choose-seats`)
        setDepartureFlightID(null);
        console.log("Navigating to choose seats for flight:", departureFlightID);
      }} className="back-button">
        Back to Outbound Seat Selection
      </button>
    </div>
  );
}
