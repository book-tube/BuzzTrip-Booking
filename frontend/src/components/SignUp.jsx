import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch("/api/signup", {
    //   method: "POST",
    //   credentials: "include",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password, firstName, lastName, birthdate, phone, address }),
    // });
// 
    // if (res.ok) {
    //   navigate("/log-in");
    // } else {
    //   alert("Registrierung fehlgeschlagen");
    // }

    navigate("/log-in");
  };

  const today = new Date()

  const min18Date = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  ).toISOString().split("T")[0];

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            placeholder="076 123 45 67"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Birthdate:
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            min={"1900-01-01"}
            max={min18Date}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/log-in">Log In</a>
        </p>
      </form>
    </div>
  );
}
