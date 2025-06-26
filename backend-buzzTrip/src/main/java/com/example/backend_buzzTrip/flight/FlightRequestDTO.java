package com.example.backend_buzzTrip
.flight;

import java.time.LocalDate;
import java.util.Objects;

public class FlightRequestDTO {
    private int flightNumber;
    private String departureLocation;
    private String arrivalLocation;
    private LocalDate departureTime;
    private LocalDate arrivalTime;
    private int price;
    private String airlineName;

    public int getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(int flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getDepartureLocation() {
        return departureLocation;
    }

    public void setDepartureLocation(String departureLocation) {
        this.departureLocation = departureLocation;
    }

    public String getArrivalLocation() {
        return arrivalLocation;
    }

    public void setArrivalLocation(String arrivalLocation) {
        this.arrivalLocation = arrivalLocation;
    }

    public LocalDate getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalDate departureTime) {
        this.departureTime = departureTime;
    }

    public LocalDate getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalDate arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getAirlineName() {
        return airlineName;
    }

    public void setAirlineName(String airlineName) {
        this.airlineName = airlineName;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        FlightRequestDTO that = (FlightRequestDTO) o;
        return flightNumber == that.flightNumber && price == that.price && Objects.equals(departureLocation, that.departureLocation) && Objects.equals(arrivalLocation, that.arrivalLocation) && Objects.equals(departureTime, that.departureTime) && Objects.equals(arrivalTime, that.arrivalTime) && Objects.equals(airlineName, that.airlineName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(flightNumber, departureLocation, arrivalLocation, departureTime, arrivalTime, price, airlineName);
    }
}
