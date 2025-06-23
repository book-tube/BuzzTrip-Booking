/* mega.css */

/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

h1, h2 {
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

/* Booking Confirmation Styles */
.booking-confirmation {
    padding: 20px;
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Payment Styles */
.payment {
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.payment form {
    display: flex;
    flex-direction: column;
}

.payment label {
    margin-bottom: 10px;
}

/* Passenger Information Styles */
.passenger-information {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Choose Seats Styles */
.choose-seats {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.seat-button {
    width: 40px;
    height: 40px;
    margin: 2px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}

.seat-button.selected {
    background-color: #4CAF50;
    color: white;
}

.seat-button.occupied {
    background-color: gray;
    cursor: not-allowed;
}

/* Flight Details Styles */
.flight-details {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

/* Available Flights Styles */
.available-flights {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.flight-item {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: pointer;
}

/* Search Flights Styles */
.search-flights {
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-flights form {
    display: flex;
    flex-direction: column;
}

.search-flights label {
    margin-bottom: 10px;
}

/* Buttons */
button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #45a049;
}

.back-button {
    background-color: #f44336;
}

.back-button:hover {
    background-color: #e53935;
}