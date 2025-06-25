import { useEffect } from "react";



export default function BookingConfirmation({
  departureFlightID,
  returnFlightID,
  departureSelectedSeats,
  returnSelectedSeats
}) {
  useEffect(() => {
    const bookingData = {
      departureFlightID,
      returnFlightID,
      departureSelectedSeats,
      returnSelectedSeats,
    };

    const token = sessionStorage.getItem("authToken");

    const sendBooking = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
          },
          body: JSON.stringify(bookingData),
        });

        if (!res.ok) {
          console.error("Fehler beim Speichern der Buchung");
        }
      } catch (error) {
        console.error("Netzwerkfehler:", error);
      }
    };

    sendBooking();
  }, [
    departureFlightID,
    returnFlightID,
    departureSelectedSeats,
    returnSelectedSeats,
  ]);


  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmation</h1>
      <p>Your flight has been successfully booked!</p>
      <p>
        Thank you for choosing our airline. We look forward to welcoming you on
        board.
      </p>
      <p>
        If you have any questions or need assistance, please contact our
        customer service.
      </p>
    </div>
  );
}
