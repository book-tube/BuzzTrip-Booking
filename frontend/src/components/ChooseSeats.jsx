import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

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
  flightDetailsID,
  departureSelectedSeats,
  setDepartureSelectedSeats,
  setReturnSelectedSeats,
  returnSelectedSeats,
  setDepartureFlightID,
  departureFlightID,
  returnFlightID,
  setReturnFlightID,
  flightSearch,
}) {
  const navigate = useNavigate();
  const [occupiedSeats, setOccupiedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const passengerCount = flightSearch.adults + flightSearch.children;
  const remainingSeats = passengerCount - selectedSeats.length;
  const dateKey = flightSearch.departureDate;

  useEffect(() => {
    const initSeatInstance = async () => {
      const instanceRef = doc(db, "flights", flightDetailsID, "instances", dateKey);
      const instanceSnap = await getDoc(instanceRef);

      if (!instanceSnap.exists()) {
        const seats = {};
        seatRows.flat().forEach((seat) => {
          seats[seat] = "free";
        });
        await setDoc(instanceRef, {
          createdAt: new Date().toISOString(),
          seats,
        });
        setOccupiedSeats([]);
      } else {
        const seatData = instanceSnap.data().seats;
        const occupied = Object.entries(seatData)
          .filter(([_, status]) => status === "booked")
          .map(([seat]) => seat);
        setOccupiedSeats(occupied);
      }
    };

    if (flightDetailsID && dateKey) {
      initSeatInstance();
    }
  }, [flightDetailsID, dateKey]);

  const handleBackToFlightDetails = () => {
    navigate(`/flight-details/${flightDetailsID}`);
  };

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

  const handleChooseSeats = async () => {
    const instanceRef = doc(db, "flights", flightDetailsID, "instances", dateKey);
    const instanceSnap = await getDoc(instanceRef);
    if (!instanceSnap.exists()) return;

    const updatedSeats = { ...instanceSnap.data().seats };
    selectedSeats.forEach((seat) => {
      updatedSeats[seat] = "booked";
    });

    await updateDoc(instanceRef, { seats: updatedSeats });

    if (departureFlightID === null) {
      setDepartureFlightID(flightDetailsID);
      setDepartureSelectedSeats(selectedSeats);
      if (flightSearch.tripType === "roundtrip") {
        navigate("/available-flights");
      } else {
        navigate("/passenger-information");
      }
    } else {
      setReturnFlightID(flightDetailsID);
      setReturnSelectedSeats(selectedSeats);
      navigate("/passenger-information");
    }
  };

  return (
    <div className="choose-seats-container">
      <h1 className="title">Choose Your Seats</h1>
      <p className="subtitle">
        Please select {remainingSeats} more seat
        {remainingSeats !== 1 ? "s" : ""}
      </p>

      <div className="seat-map">
        <div className="seat-map-header">
          <p className="label">Cockpit</p>
          <p className="exit-label">🚪 Exit 🚪</p>
        </div>

        <div className="seat-rows">
          {seatRows.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              <div className="seat-side">
                {row.slice(0, 3).map((seat) => (
                  <button
                    key={seat}
                    className={`seat ${
                      occupiedSeats.includes(seat) ? "occupied" : ""
                    } ${selectedSeats.includes(seat) ? "selected" : ""}`}
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
                    className={`seat ${
                      occupiedSeats.includes(seat) ? "occupied" : ""
                    } ${selectedSeats.includes(seat) ? "selected" : ""}`}
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
          <span>🚻 Restroom</span>
          <span>🚪 Exit</span>
          <span>🚻 Restroom</span>
        </div>
      </div>

      <div className="button-group">
        <button onClick={handleBackToFlightDetails}>
          Back to Flight Details
        </button>
        <button
          onClick={handleChooseSeats}
          disabled={selectedSeats.length !== passengerCount}
        >
          Continue
        </button>
      </div>
    </div>
  );
}