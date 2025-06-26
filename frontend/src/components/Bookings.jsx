import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      try {
        const q = query(
          collection(db, "bookings"),
          where("userId", "==", currentUser.uid)
        );

        const querySnapshot = await getDocs(q);
        const fetchedBookings = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setBookings(fetchedBookings);
      } catch (error) {
        console.error("Fehler beim Abrufen der Buchungen:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bookings-container">
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
              <p><strong>Return:</strong> {booking.returnFlightID || "—"}</p>
              <p><strong>Departure Seats:</strong> {booking.departureSelectedSeats?.join(", ")}</p>
              {booking.returnSelectedSeats?.length > 0 && (
                <p><strong>Return Seats:</strong> {booking.returnSelectedSeats.join(", ")}</p>
              )}
              <p><strong>Gebucht am:</strong> {booking.timestamp?.toDate?.().toLocaleString() || "—"}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
