/* mega.css */

/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

h1, h2, h3 {
    color: #333;
}

p {
    color: #666;
}

/* Navigation Menu */
nav {
    background-color: #4CAF50;
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

/* Available Flights */
.Flight-List {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}

.Flight-Item {
    background-color: white;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.Flight-Item:hover {
    background-color: #f0f0f0;
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

/* Choose Seats */
.seat-selection {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.seat-selection button {
    width: 40px;
    height: 40px;
    margin: 2px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}

.seat-selection button:hover {
    background-color: #e0e0e0;
}

.seat-selection .occupied {
    background-color: gray;
    cursor: not-allowed;
}

.seat-selection .selected {
    background-color: #4CAF50;
    color: white;
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

button.back-button {
    background-color: #f44336;
    color: white;
}

button.back-button:hover {
    background-color: #d32f2f;
}

button.continue-button {
    background-color: #4CAF50;
    color: white;
}

button.continue-button:hover {
    background-color: #388E3C;
}