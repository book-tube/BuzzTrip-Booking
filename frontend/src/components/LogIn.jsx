import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    e.preventDefault();

    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   credentials: "include",
    //   body: JSON.stringify({ email: "test@test.com", password: "1234" }),
    //   headers: { "Content-Type": "application/json" },
    // });
    //
    // if (res.ok) {
    //   setIsLoggedIn(true);
    // } else {
    //   alert("Login fehlgeschlagen");
    // }

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
