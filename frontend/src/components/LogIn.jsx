import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const token = data.token; // <-- hier nimmst du das JWT aus der Antwort

      // Token speichern, z. B. im Speicher oder Context
      sessionStorage.setItem("authToken", token);

      navigate("/search-flights");
    } else {
      alert("Login fehlgeschlagen");
    }

    navigate("/search-flights");
  };

  return (
    <>
      <div className="login-container">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Log In</button>
          <p>
            Don't have an account? <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </>
  );
}
