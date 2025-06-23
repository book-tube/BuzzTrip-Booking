import { useState } from "react";
import { useNavigate } from "react-router-dom";

const seatRows = [
  ["1A", "1B", "1C", "1D", "1E", "1F"],
  ["2A", "2B", "2C", "2D", "2E", "2F"],
  ["3A", "3B", "3C", "3D", "3E", "3F"],
  ["4A", "4B", "4C", "4D", "4E", "4F"],
  ["5A", "5B", "5C", "5D", "5E", "5F"],
  ["6A", "6B", "6C", "6D", "6E", "6F"],
  ["7A", "7B", "7C", "7D", "7E", "7F"],
  ["8A", "8B", "8C", "8D", "8E", "8F"],
  ["9A", "9B", "9C", "9D", "9E", "9F"],
  ["10A", "10B", "10C", "10D", "10E", "10F"],
];

export default function ChooseSeats({
  passengerCount,
  setSelectedSeats,
  selectedSeats,
  flightID,
}) {
  const navigate = useNavigate();
  const [occupiedSeats] = useState(["1B", "2C", "5E", "7A", "8F"]);

  const handleSeatSelect = (seat) => {
    if (occupiedSeats.includes(seat)) return;

    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(seat)) {
        return prevSelected.filter((s) => s !== seat);
      } else if (prevSelected.length < passengerCount) {
        return [...prevSelected, seat];
      }
      return prevSelected;
    });
  };

  const handleBackToFlightDetails = () => {
    navigate(`/flight-details/${flightID}`);
  };

  const handleContinue = () => {
    if (selectedSeats.length === passengerCount) {
      
      navigate("/passenger-information");
    } else {
      alert(`Please select ${passengerCount - selectedSeats.length} more seat${passengerCount - selectedSeats.length !== 1 ? "s" : ""}`);
    }
  };

  const remainingSeats = passengerCount - selectedSeats.length;

  return (
    <div className="choose-seats-container">
      <h1 className="choose-seats-title">Choose Your Seats</h1>
      <p className="choose-seats-subtitle">
        Please select {remainingSeats} more seat{remainingSeats !== 1 ? "s" : ""}
      </p>

      <div className="seat-map">
        <div className="seat-map-header">
          <p className="bold">Cockpit</p>
          <p>🚪 Exit 🚪</p>
        </div>

        <div className="seat-rows">
          {seatRows.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              <div className="seat-side">
                {row.slice(0, 3).map((seat) => (
                  <button
                    key={seat}
                    className={`seat ${occupiedSeats.includes(seat) ? "occupied" : ""} ${
                      selectedSeats.includes(seat) ? "selected" : ""
                    }`}
                    onClick={() => handleSeatSelect(seat)}
                    disabled={occupiedSeats.includes(seat)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
              <div className="seat-aisle"></div>
              <div className="seat-side">
                {row.slice(3, 6).map((seat) => (
                  <button
                    key={seat}
                    className={`seat ${occupiedSeats.includes(seat) ? "occupied" : ""} ${
                      selectedSeats.includes(seat) ? "selected" : ""
                    }`}
                    onClick={() => handleSeatSelect(seat)}
                    disabled={occupiedSeats.includes(seat)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="seat-map-footer">
          <p>🚻 Restroom</p>
          <p>🚪 Exit</p>
          <p>🚻 Restroom</p>
        </div>
      </div>

      <div className="choose-seats-buttons">
        <button
          onClick={() => navigate(`/flight-details/${flightID}`)}
          className="back-button"
        >
          Back to Flight Details
        </button>
        <button
          onClick={() => navigate("/passenger-information")}
          className="continue-button"
          disabled={selectedSeats.length !== passengerCount}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
