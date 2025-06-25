import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PassengerInformation({ flightSearch, selectedSeats }) {
  const navigate = useNavigate();
  const totalPassengers = flightSearch.adults + flightSearch.children;

  const [passengers, setPassengers] = useState(
    Array(totalPassengers).fill({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nationality: "",
      passportNumber: "",
      seatNumber: "",
    })
  );

  const handleInputChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: value,
    };
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment/");
  };

  return (
    <div className="passenger-information-container">
      <h1 className="passenger-title">Passenger Information</h1>

      <form onSubmit={handleSubmit}>
        {passengers.map((passenger, index) => (
          <div key={index} className="passenger-card">
            <h2 className="passenger-subtitle">
              {index + 1 <= flightSearch.adults
                ? `Adult Passenger ${index + 1}`
                : `Child Passenger ${index - flightSearch.adults + 1}`}
              {selectedSeats && ` - Seat ${selectedSeats[index]}`}
            </h2>

            <div className="passenger-form-group">
              <label>
                First Name:
                <input
                  type="text"
                  required
                  value={passenger.firstName}
                  onChange={(e) =>
                    handleInputChange(index, "firstName", e.target.value)
                  }
                  className="passenger-input"
                />
              </label>

              <label>
                Last Name:
                <input
                  type="text"
                  required
                  value={passenger.lastName}
                  onChange={(e) =>
                    handleInputChange(index, "lastName", e.target.value)
                  }
                  className="passenger-input"
                />
              </label>

              <label>
                Date of Birth:
                <input
                  min={"1900-01-01"}
                  max={new Date().toISOString().split("T")[0]}
                  type="date"
                  required
                  value={passenger.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange(index, "dateOfBirth", e.target.value)
                  }
                  className="passenger-input"
                />
              </label>

              <label>
                Nationality:
                <input
                  type="text"
                  required
                  value={passenger.nationality}
                  onChange={(e) =>
                    handleInputChange(index, "nationality", e.target.value)
                  }
                  className="passenger-input"
                />
              </label>

              <label>
                Passport Number:
                <input
                  type="text"
                  required
                  value={passenger.passportNumber}
                  onChange={(e) =>
                    handleInputChange(index, "passportNumber", e.target.value)
                  }
                  className="passenger-input"
                />
              </label>
            </div>
          </div>
        ))}

        <div className="passenger-button-group">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="button"
          >
            Back
          </button>
          <button type="submit" className="button">
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
}
