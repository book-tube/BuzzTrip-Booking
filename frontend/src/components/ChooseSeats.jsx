import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export default function ChooseSeats({ passengerCount, setSelectedSeats, selectedSeats, flightID }) {
  const navigate = useNavigate();
  const [occupiedSeats] = useState(["1B", "2C", "5E", "7A", "8F"]);

  const handleSeatSelect = (seat) => {
    if (occupiedSeats.includes(seat)) {
      return; 
    }

    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(seat)) {
        return prevSelected.filter((s) => s !== seat);
      } else if (prevSelected.length < passengerCount) {
        return [...prevSelected, seat];
      }
      return prevSelected;
    });
  };

  const getSeatStyle = (seat) => {
    const baseStyle = {
      width: "40px",
      height: "40px",
      margin: "2px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      cursor: "pointer",
    };

    if (occupiedSeats.includes(seat)) {
      return {
        ...baseStyle,
        backgroundColor: "gray",
        cursor: "not-allowed",
      };
    }

    if (selectedSeats.includes(seat)) {
      return {
        ...baseStyle,
        backgroundColor: "#4CAF50",
        color: "white",
      };
    }

    return {
      ...baseStyle,
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
    };
  };


  const remainingSeats = passengerCount - selectedSeats.length;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Choose Your Seats
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Please select {remainingSeats} more seat
        {remainingSeats !== 1 ? "s" : ""}
      </p>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Cockpit</p>
          <p>🚪 Exit 🚪</p>
        </div>

        <div>
          {seatRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "4px",
              }}
            >
              {/* Left side: A, B, C */}
              <div style={{ display: "flex", gap: "4px" }}>
                {row.slice(0, 3).map((seat) => (
                  <button
                    key={seat}
                    style={getSeatStyle(seat)}
                    onClick={() => handleSeatSelect(seat)}
                    disabled={occupiedSeats.includes(seat)}
                  >
                    {seat}
                  </button>
                ))}
              </div>

              {/* Aisle */}
              <div style={{ width: "40px" }}></div>

              {/* Right side: D, E, F */}
              <div style={{ display: "flex", gap: "4px" }}>
                {row.slice(3, 6).map((seat) => (
                  <button
                    key={seat}
                    style={getSeatStyle(seat)}
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            padding: "10px",
            borderTop: "1px solid #ddd",
          }}
        >
          <p>🚻 Restroom</p>
          <p>🚪 Exit</p>
          <p>🚻 Restroom</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => navigate(`/flight-details/${flightID}`)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Back to Flight Details
        </button>
        <button
          onClick={() => {
            setSelectedSeats(selectedSeats);
            navigate("/passenger-information");
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          disabled={selectedSeats.length !== passengerCount}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
