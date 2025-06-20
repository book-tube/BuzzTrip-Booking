package ch.bbw.backend.booking;

import ch.bbw.backend.user.UserMapper;
import ch.bbw.backend.user.UserRequestDTO;

public class BookingMapper {
    public static BookingResponseDTO toDTO(Booking booking) {
        BookingResponseDTO bookingDTO = new BookingResponseDTO();

        bookingDTO.setBookingTime(booking.getBookingTime());
        bookingDTO.setUser(UserMapper.toLightDTO(booking.getUser()));
        bookingDTO.setId(booking.getId());
        return bookingDTO;
    }
}
