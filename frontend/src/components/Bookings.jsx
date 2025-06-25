import { useEffect, useState } from "react";



export default function Bookings() {

  const bookingss = [
    {
      departureFlightID: "LX123",
      returnFlightID: "LX124",
      departureSelectedSeats: ["12A", "12B"],
      returnSelectedSeats: ["14C", "14D"],
      date: "2025-07-01",
      price: 450.00
    },
    {
      departureFlightID: "BA987",
      returnFlightID: null, // One-way
      departureSelectedSeats: ["3A"],
      returnSelectedSeats: [],
      date: "2025-08-15",
      price: 199.99
    }
  ];
  
  const [bookings, setBookings] = useState(bookingss);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/bookings/my", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Fehler beim Abrufen der Buchungen");
        }

        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bookings-contianer">
      <h1>Bookings</h1>
      {loading ? (
        <p>Lade Buchungen...</p>
      ) : bookings.length === 0 ? (
        <p>Keine Buchungen vorhanden.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <p><strong>Departure:</strong> {booking.departureFlightID}</p>
              <p><strong>Return:</strong> {booking.returnFlightID}</p>
              <p><strong>Seats:</strong> {booking.departureSelectedSeats.join(", ")}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
