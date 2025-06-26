import { useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function BookingConfirmation({
  flightDetailsID,
  departureSelectedSeats,
  returnSelectedSeats,
  departureFlightID,
  returnFlightID,
  flightSearch,
}) {
  useEffect(() => {
    const saveBookingToFirestore = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const bookingData = {
        triptype: flightSearch.tripType,
        from: flightSearch.from,
        to: flightSearch.to,
        userId: currentUser.uid,
        departureFlightID,
        returnFlightID,
        departureSelectedSeats,
        returnSelectedSeats,
        timestamp: serverTimestamp(),
      };

      try {
        await addDoc(collection(db, "bookings"), bookingData);
        console.log("Buchung erfolgreich gespeichert");
      } catch (error) {
        console.error("Fehler beim Speichern der Buchung:", error);
      }
    };

    saveBookingToFirestore();
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
