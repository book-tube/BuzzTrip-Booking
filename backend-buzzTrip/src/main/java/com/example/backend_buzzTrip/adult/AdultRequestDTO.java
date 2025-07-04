package com.example.backend_buzzTrip.adult;


import com.example.backend_buzzTrip
.booking.Booking;

import java.time.LocalDate;
import java.util.Objects;

public class AdultRequestDTO {
    private String firstName;

    private String lastName;

    private LocalDate birthdate;

    private String passportNumber;

    private Integer userId;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public String getPassportNumber() {
        return passportNumber;
    }

    public void setPassportNumber(String passportNumber) {
        this.passportNumber = passportNumber;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        AdultRequestDTO that = (AdultRequestDTO) o;
        return Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(birthdate, that.birthdate) && Objects.equals(passportNumber, that.passportNumber) && Objects.equals(userId, that.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, birthdate, passportNumber, userId);
    }

    @Override
    public String toString() {
        return "AdultRequestDTO{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthdate=" + birthdate +
                ", passportNumber='" + passportNumber + '\'' +
                ", userId=" + userId +
                '}';
    }
}
