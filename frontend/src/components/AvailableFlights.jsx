import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function AvailableFlights({
  flightSearch,
  setFlightDetailsID,
  departureFlightID,
  setDepartureFlightID,
}) {
  const [isReturnPhase, setIsReturnPhase] = useState(
    flightSearch.tripType === "roundtrip"
      ? departureFlightID
        ? true
        : false
      : false
  );

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/search-flights");
  };

  const handleFlightDetailsSelection = (flightDetailsID) => {
    navigate(`/flight-details/${flightDetailsID}`);
    setFlightDetailsID(flightDetailsID);
  };

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      const from = isReturnPhase ? flightSearch.to : flightSearch.from;
      const to = isReturnPhase ? flightSearch.from : flightSearch.to;

      try {
        const q = query(
          collection(db, "flights"),
          where("from", "==", from),
          where("to", "==", to)
        );
        const snapshot = await getDocs(q);
        const flightList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFlights(flightList);
      } catch (error) {
        console.error("Fehler beim Laden der Flüge:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [isReturnPhase, flightSearch]);

  return (
    <div className="available-flights-container">
      <h1>
        {isReturnPhase ? "Available Return-Flights" : "Available Flights"}
      </h1>

      <h2>
        Flights from {isReturnPhase ? flightSearch.to : flightSearch.from} to{" "}
        {isReturnPhase ? flightSearch.from : flightSearch.to}
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
        {loading ? (
          <p>Flüge werden geladen...</p>
        ) : flights.length === 0 ? (
          <p>Keine Flüge gefunden.</p>
        ) : (
          flights.map((flight) => (
            <div
              key={flight.id}
              className="Flight-Item"
              onClick={() => handleFlightDetailsSelection(flight.id)}
            >
              <h2>Flight ID: {flight.id}</h2>
              <p>From: {flight.from}</p>
              <p>To: {flight.to}</p>
              <p>Departure: {flight.departureTime}</p>
              <p>Arrival: {flight.arrivalTime}</p>
            </div>
          ))
        )}
        <button onClick={handleBack} className="back-button">
          Back to Search
        </button>

        <button
          style={{ display: isReturnPhase ? "block" : "none" }}
          onClick={() => {
            navigate(`/${departureFlightID}/choose-seats`);
            setDepartureFlightID(null);
            console.log(
              "Navigating to choose seats for flight:",
              departureFlightID
            );
          }}
          className="back-button"
        >
          Back to Outbound Seat Selection
        </button>
      </div>
    </div>
  );
}
