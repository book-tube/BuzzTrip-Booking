package com.example.backend_buzzTrip
.PassengerAssignment;

import java.util.Objects;

public class PassengerAssignmentRequestDTO {
    private Integer bookingId;
    private Integer flightId;
    private Integer userId;
    private Integer adultId;
    private Integer childId;
    private PassengerType passengerType;
    private String seatNumber;

    public Integer getBookingId() {
        return bookingId;
    }

    public void setBookingId(Integer bookingId) {
        this.bookingId = bookingId;
    }

    public Integer getFlightId() {
        return flightId;
    }

    public void setFlightId(Integer flightId) {
        this.flightId = flightId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getAdultId() {
        return adultId;
    }

    public void setAdultId(Integer adultId) {
        this.adultId = adultId;
    }

    public Integer getChildId() {
        return childId;
    }

    public void setChildId(Integer childId) {
        this.childId = childId;
    }

    public PassengerType getPassengerType() {
        return passengerType;
    }

    public void setPassengerType(PassengerType passengerType) {
        this.passengerType = passengerType;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        PassengerAssignmentRequestDTO that = (PassengerAssignmentRequestDTO) o;
        return Objects.equals(bookingId, that.bookingId) && Objects.equals(flightId, that.flightId) && Objects.equals(userId, that.userId) && Objects.equals(adultId, that.adultId) && Objects.equals(childId, that.childId) && passengerType == that.passengerType && Objects.equals(seatNumber, that.seatNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bookingId, flightId, userId, adultId, childId, passengerType, seatNumber);
    }
}
