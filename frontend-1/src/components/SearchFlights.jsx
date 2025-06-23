/* mega.css */

/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

h1, h2, h3 {
    color: #4CAF50;
}

nav {
    background-color: #333;
    padding: 10px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
}

nav a:hover {
    text-decoration: underline;
}

/* Search Flights */
.search-flights {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.search-flights form {
    display: flex;
    flex-direction: column;
}

.search-flights label {
    margin-bottom: 10px;
}

.search-flights input[type="text"],
.search-flights input[type="date"],
.search-flights input[type="number"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-flights button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.search-flights button:hover {
    background-color: #45a049;
}

/* Available Flights */
.Flight-List {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}

.Flight-Item {
    padding: 15px;
    margin: 10px 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.Flight-Item:hover {
    background-color: #e0e0e0;
}

/* Flight Details */
.flight-details {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.flight-details table {
    width: 100%;
    border-collapse: collapse;
}

.flight-details th, .flight-details td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

.flight-details th {
    background-color: #f2f2f2;
}

/* Choose Seats */
.seat-selection {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.seat-selection button {
    margin: 5px;
}

/* Passenger Information */
.passenger-info {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Payment */
.payment {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Booking Confirmation */
.booking-confirmation {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Buttons */
button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    opacity: 0.9;
}

/* Responsive Styles */
@media (max-width: 600px) {
    .search-flights, .flight-details, .passenger-info, .payment, .booking-confirmation {
        width: 90%;
    }
}