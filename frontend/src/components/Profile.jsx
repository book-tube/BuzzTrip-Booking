import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "Max",
    lastName: "Muster",
    phone: "076 123 45 67",
    birthdate: "2000-01-01",
    address: "Musterstrasse 1, 8000 Zürich",
    email: "max@example.com",
  });

  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    fetch("http://localhost:8080/api/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="user-info">
        <p>
          <strong>Firstname:</strong> {user.firstName}
        </p>
        <p>
          <strong>Lastname:</strong> {user.lastName}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Birthdate:</strong> {user.birthdate}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}
