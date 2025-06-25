import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking-confirmation");
  };

  return (
    <div className="payment">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input type="text" name="cardNumber" required />
        </label>
        <label>
          Expiry Date:
          <input type="month" name="expiryDate" min={new Date().toISOString().slice(0, 7)} max="2100-12" required />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" required />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
