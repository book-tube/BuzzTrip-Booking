package ch.bbw.backend.booking;

import ch.bbw.backend.adult.Adult;
import ch.bbw.backend.user.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(insertable = false, updatable = false)
    private LocalDate bookingTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "adult_id", nullable = false)
    private Adult adult;


    public Booking() {
    }

    public Booking(Integer id){
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(LocalDate bookingTime) {
        this.bookingTime = bookingTime;
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

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return Objects.equals(id, booking.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
