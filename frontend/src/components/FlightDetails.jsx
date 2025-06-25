import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FlightDetails({ flightSearch, setFlightDetailsID, flightDetailsID }) {
  const navigate = useNavigate();
  
  const token = sessionStorage.getItem("authToken");

  const handleChooseSeats = () => {
   // if (token === null) {
   //   navigate("/log-in");
   //   return;
   // }

    navigate(`/${flightDetailsID}/choose-seats`);
  };

  const handleBack = () => {
    navigate("/available-flights");
    setFlightDetailsID(null);
  }

  return (
  <div className="flight-details-container">
  <h1 className="title">Flight Details</h1>

  <div className="details-grid">
    <div>
      <span className="label">Flight Number</span>
      <span className="value">FL123</span>
    </div>
    <div>
      <span className="label">From</span>
      <span className="value">{flightSearch.from}</span>
    </div>
    <div>
      <span className="label">To</span>
      <span className="value">{flightSearch.to}</span>
    </div>
    <div>
      <span className="label">Departure Time</span>
      <span className="value">10:00 AM</span>
    </div>
    <div>
      <span className="label">Arrival Time</span>
      <span className="value">1:00 PM</span>
    </div>
    <div>
      <span className="label">Duration</span>
      <span className="value">6h 0m</span>
    </div>
    <div>
      <span className="label">Price</span>
      <span className="value">$300</span>
    </div>
  </div>

  <div className="button-group">
    <button className="back-button" onClick={handleBack}>Back to Available Flights</button>
    <button className="back-button" onClick={handleChooseSeats}>Choose Seats</button>
  </div>
</div>

  );
}
