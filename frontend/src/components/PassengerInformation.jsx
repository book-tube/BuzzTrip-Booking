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
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Passenger Information
      </h1>

      <form onSubmit={handleSubmit}>
        {passengers.map((passenger, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>
              {index + 1 <= flightSearch.adults
                ? `Adult Passenger ${index + 1}`
                : `Child Passenger ${index - flightSearch.adults + 1}`}
              {selectedSeats && ` - Seat ${selectedSeats[index]}`}
            </h2>

            <div style={{ display: "grid", gap: "15px" }}>
              <label>
                First Name:
                <input
                  type="text"
                  required
                  value={passenger.firstName}
                  onChange={(e) =>
                    handleInputChange(index, "firstName", e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
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
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>

              <label>
                Date of Birth:
                <input
                  type="date"
                  required
                  value={passenger.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange(index, "dateOfBirth", e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
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
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
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
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>
            </div>
          </div>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Back
          </button>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
}
