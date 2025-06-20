import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function FlightDetails( {FlightID} ) {
    const navigate = useNavigate();

    const handleChooseSeats = () => {
        navigate(`/${FlightID}/choose-seats`);
    };
    
    return (
        <div className="flight-details">
            <h1>Flight Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example flight data, replace with actual data */}
                    <tr>
                        <td>FL123</td>
                        <td>New York</td>
                        <td>Los Angeles</td>
                        <td>10:00 AM</td>
                        <td>1:00 PM</td>
                        <td>6h 0m</td>
                        <td>$300</td>
                    </tr>
                    {/* Add more flights as needed */}
                </tbody>
            </table>

            <button onClick={() => navigate('/available-flights')}>
                Back to Available Flights
            </button>

            <button onClick={handleChooseSeats}>
                Choose Seats
            </button>
        </div>
    );
}