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

a {
    text-decoration: none;
    color: #4CAF50;
}

nav {
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav a {
    margin-right: 15px;
}

/* Search Flights */
.search-flights {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-flights label {
    display: block;
    margin-bottom: 10px;
}

.search-flights input[type="text"],
.search-flights input[type="date"],
.search-flights input[type="number"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.search-flights button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* Available Flights */
.Flight-List {
    margin: 20px 0;
}

.Flight-Item {
    padding: 15px;
    margin: 10px 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.Flight-Item:hover {
    background-color: #e0e0e0;
}

/* Flight Details */
.flight-details {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.flight-details table {
    width: 100%;
    border-collapse: collapse;
}

.flight-details th, .flight-details td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
}

.flight-details button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
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
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Payment */
.payment {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Booking Confirmation */
.booking-confirmation {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Buttons */
button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

/* Responsive Styles */
@media (max-width: 600px) {
    .search-flights, .flight-details, .passenger-info, .payment, .booking-confirmation {
        padding: 15px;
    }
}