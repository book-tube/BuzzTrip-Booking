export default function Payment() {
    return (
        <div className="payment">
            <h1>Payment</h1>
            <form>
                <label>
                    Card Number:
                    <input type="text" name="cardNumber" required />
                </label>
                <label>
                    Expiry Date:
                    <input type="month" name="expiryDate" required />
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