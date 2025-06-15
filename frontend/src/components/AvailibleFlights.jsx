import { useNavigate } from 'react-router-dom';

export default function AvailibleFlights({ flightSearch, setFlightID} ) {
    const { from, to, date } = flightSearch;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/search-flights');
    };

    const handleDateChange = (direction) => {
    }

    const handleFlightSelection = (flightID) => {
        setFlightID(flightID);
        navigate('/flight-details/' + flightID);
    }

    return (
        <div>
            <h1>Available Flights</h1>

            <h2>Flights from {from} to {to}</h2>

            <div className="DateSelection">

                <div className="User-Selection-yesterday">
                    {/* One day before the selected date */}
                </div>

                <div className="User-Selected-Date">
                    {date}
                </div>

                <div className="User-Selection-tomorrow">
                    {/* One day after the selected date */}
                </div>
            </div>

            <div className="Flight-List">
                {/* Example flight data, replace with actual data */}

                <div className="Flight-Item" onClick={() => handleFlightSelection('ZH1AB2')}>
                    <h2>Flight 1</h2>
                    <p>From: City A</p>
                    <p>To: City B</p>
                    <p>Departure: 10:00 AM</p>
                    <p>Arrival: 12:00 PM</p>
                </div>

                <div className="Flight-Item" onClick={() => handleFlightSelection('ZH1AB3')}>
                    <h2>Flight 2</h2>
                    <p>From: City C</p>
                    <p>To: City D</p>
                    <p>Departure: 1:00 PM</p>
                    <p>Arrival: 3:00 PM</p>
                </div>
                <div className="Flight-Item" onClick={() => handleFlightSelection('ZH1AB4')}>
                    <h2>Flight 3</h2>
                    <p>From: City E</p>
                    <p>To: City F</p>
                    <p>Departure: 4:00 PM</p>
                    <p>Arrival: 6:00 PM</p>
                </div>
            </div>

            <button onClick={handleBack} className="back-button">
                Back to Search
            </button>
        </div>
    );
}