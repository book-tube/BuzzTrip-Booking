import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;

      if (!currentUser) return;

      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUser(userSnap.data());
      } else {
        console.warn("User document does not exist");
      }
    };

    fetchUserData();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="user-info">
        <p><strong>Firstname:</strong> {user.firstName}</p>
        <p><strong>Lastname:</strong> {user.lastName}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Birthdate:</strong> {user.birthdate}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}
