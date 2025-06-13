export default function ChooseSeats() {
    return (
        <div className="choose-seats">
            <h1>Choose Your Seats</h1>
            <p>Please select your preferred seats from the available options below.</p>
            <div className="seat-selection">
                {/* Example seat layout, replace with actual seat data */}
                <div className="seat-row">
                    <span className="seat">1A</span>
                    <span className="seat">1B</span>
                    <span className="seat">1C</span>
                </div>
                <div className="seat-row">
                    <span className="seat">2A</span>
                    <span className="seat">2B</span>
                    <span className="seat">2C</span>
                </div>
                {/* Add more rows as needed */}
            </div>
            <button type="button" onClick={() => alert('Seats selected!')}>Confirm Seats</button>
        </div>
    );
}