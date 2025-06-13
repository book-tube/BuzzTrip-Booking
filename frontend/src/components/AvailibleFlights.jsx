export default function AvailibleFlights({ flightSearch }) {
    const { from, to, date } = flightSearch;

    return (
        <div>
            <h1>Available Flights</h1>

            <div className="DateSelection">

                <div className="User-Selection-yesterday">
                    {date - 1}
                </div>

                <div className="User-Selected-Date">
                    {date}
                </div>

                <div className="User-Selection-tomorrow">
                    {date + 1}
                </div>
            </div>

            <div className="Flight-List">
                <h2>Flights from {from} to {to}</h2>
                <div className="Flight-Item">
                    <h2>Flight 1</h2>
                    <p>From: City A</p>
                    <p>To: City B</p>
                    <p>Departure: 10:00 AM</p>
                    <p>Arrival: 12:00 PM</p>
                </div>

                <div className="Flight-Item">
                    <h2>Flight 2</h2>
                    <p>From: City C</p>
                    <p>To: City D</p>
                    <p>Departure: 1:00 PM</p>
                    <p>Arrival: 3:00 PM</p>
                </div>
                <div className="Flight-Item">
                    <h2>Flight 3</h2>
                    <p>From: City E</p>
                    <p>To: City F</p>
                    <p>Departure: 4:00 PM</p>
                    <p>Arrival: 6:00 PM</p>
                </div>
            </div>
        </div>
    );
}