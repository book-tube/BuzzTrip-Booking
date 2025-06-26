package ch.bbw.backend.booking;

import ch.bbw.backend.user.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BookingService {
    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public List<Booking> findAll() {
        return bookingRepository.findAll();
    }

    public Booking findById(Integer id) {
        return bookingRepository.findById(id).get();
    }


    public Booking createBookingForUser(User user) {
        Booking booking = new Booking();
        booking.setUser(user);
        booking.setBookingTime(LocalDate.now()); // <--- HIER wird das Datum gesetzt
        return bookingRepository.save(booking);
    }

}
