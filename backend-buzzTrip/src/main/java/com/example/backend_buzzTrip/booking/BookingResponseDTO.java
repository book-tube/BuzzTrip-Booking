package com.example.backend_buzzTrip
.booking;

import com.example.backend_buzzTrip
.user.User;
import com.example.backend_buzzTrip
.user.UserLightDTO;

import java.time.LocalDate;
import java.util.Objects;

public class BookingResponseDTO extends BookingRequestDTO{
    private Integer id;
    private UserLightDTO user;
    private LocalDate bookingTime;

    public UserLightDTO getUser() {
        return user;
    }

    public void setUser(UserLightDTO user) {
        this.user = user;
    }

    public LocalDate getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(LocalDate bookingTime) {
        this.bookingTime = bookingTime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        BookingResponseDTO that = (BookingResponseDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(user, that.user) && Objects.equals(bookingTime, that.bookingTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, bookingTime);
    }

    @Override
    public String toString() {
        return "BookingResponseDTO{" +
                "id=" + id +
                ", user=" + user +
                ", bookingTime=" + bookingTime +
                '}';
    }
}
