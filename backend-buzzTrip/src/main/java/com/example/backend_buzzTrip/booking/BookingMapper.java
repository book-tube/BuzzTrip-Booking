package com.example.backend_buzzTrip.booking;

import com.example.backend_buzzTrip
.user.UserMapper;
import com.example.backend_buzzTrip
.user.UserRequestDTO;

public class BookingMapper {
    public static BookingResponseDTO toDTO(Booking booking) {
        BookingResponseDTO bookingDTO = new BookingResponseDTO();

        bookingDTO.setBookingTime(booking.getBookingTime());
        bookingDTO.setUser(UserMapper.toLightDTO(booking.getUser()));
        bookingDTO.setId(booking.getId());
        return bookingDTO;
    }
}
