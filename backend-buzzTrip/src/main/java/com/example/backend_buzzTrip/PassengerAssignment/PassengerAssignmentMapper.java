package com.example.backend_buzzTrip
.PassengerAssignment;

import com.example.backend_buzzTrip
.adult.AdultService;
import com.example.backend_buzzTrip
.booking.BookingService;
import com.example.backend_buzzTrip
.child.ChildService;
import com.example.backend_buzzTrip
.flight.FlightService;
import com.example.backend_buzzTrip
.user.UserService;




import org.springframework.stereotype.Component;

@Component
public class PassengerAssignmentMapper {

    private final BookingService bookingService;
    private final FlightService flightService;
    private final UserService userService;
    private final AdultService adultService;
    private final ChildService childService;

    public PassengerAssignmentMapper(BookingService bookingService, FlightService flightService, UserService userService, AdultService adultService, ChildService childService) {
        this.bookingService = bookingService;
        this.flightService = flightService;
        this.userService = userService;
        this.adultService = adultService;
        this.childService = childService;
    }

    public PassengerAssignmentResponseDTO toDTO(PassengerAssignment pa) {
        PassengerAssignmentResponseDTO dto = new PassengerAssignmentResponseDTO();
        dto.setId(pa.getId());
        dto.setBookingId(pa.getBooking().getId());
        dto.setFlightId(pa.getFlight().getId());
        dto.setPassengerType(pa.getPassengerType());
        dto.setSeatNumber(pa.getSeatNumber());

        if (pa.getUser() != null) dto.setUserId(pa.getUser().getId());
        if (pa.getAdult() != null) dto.setAdultId(pa.getAdult().getId());
        if (pa.getChild() != null) dto.setChildId(pa.getChild().getId());

        return dto;
    }


    public PassengerAssignment fromDTO(PassengerAssignmentRequestDTO dto, Integer id) {
        PassengerAssignment passengerAssignment = new PassengerAssignment();

        if (id != null) {
            passengerAssignment.setId(id);
        }
        passengerAssignment.setFlight(flightService.findById(dto.getFlightId()));
        passengerAssignment.setBooking(bookingService.findById(dto.getBookingId()));
        passengerAssignment.setPassengerType(dto.getPassengerType());
        passengerAssignment.setSeatNumber(dto.getSeatNumber());

        if (dto.getUserId() != null) {
            passengerAssignment.setUser(userService.findById(dto.getUserId()));
        }

        if (dto.getAdultId() != null) {
            passengerAssignment.setAdult(adultService.findById(dto.getAdultId()));
        }

        if (dto.getChildId() != null) {
            passengerAssignment.setChild(childService.findById(dto.getChildId()));
        }

        return passengerAssignment;
    }
}
