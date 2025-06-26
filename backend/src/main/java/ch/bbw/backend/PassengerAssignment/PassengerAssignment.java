package ch.bbw.backend.PassengerAssignment;

import ch.bbw.backend.adult.Adult;
import ch.bbw.backend.booking.Booking;
import ch.bbw.backend.child.Child;
import ch.bbw.backend.flight.Flight;
import ch.bbw.backend.user.User;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class PassengerAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private PassengerType passengerType;

    @ManyToOne(optional = false)
    private Booking booking;

    @ManyToOne(optional = false)
    private Flight flight;

    @ManyToOne
    private User user;

    @ManyToOne
    private Adult adult;

    @ManyToOne
    private Child child;

    private String seatNumber;

    public PassengerAssignment() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PassengerType getPassengerType() {
        return passengerType;
    }

    public void setPassengerType(PassengerType passengerType) {
        this.passengerType = passengerType;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Adult getAdult() {
        return adult;
    }

    public void setAdult(Adult adult) {
        this.adult = adult;
    }

    public Child getChild() {
        return child;
    }

    public void setChild(Child child) {
        this.child = child;
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
        PassengerAssignment that = (PassengerAssignment) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
