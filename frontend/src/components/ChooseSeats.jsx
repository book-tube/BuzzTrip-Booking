import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ChooseSeats() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [seats, setSeats] = useState([]);

  const handleSelectSeat = (id) => {
    // Basic seat selection logic
  };

  return (
    <div>
      <h1>Choose Your Seat</h1>
      {/* Basic seat grid */}
      <div className="seat-grid">{/* Your basic seats layout */}</div>

      <button onClick={() => navigate(`/flight-details/${id}`)}>
        Back to Flight Details
      </button>

      <button onClick={() => navigate("/passenger-information")}>
        Continue
      </button>
    </div>
  );
}
