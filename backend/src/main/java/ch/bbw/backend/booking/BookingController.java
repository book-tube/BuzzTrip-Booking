package ch.bbw.backend.booking;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(BookingController.PATH)
public class BookingController {
    public static final String PATH = "/bookings";

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    @Operation(summary = "Get all bookings")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All bookings found",
                    content = @Content(schema = @Schema(implementation = BookingResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "No bookings found",
                    content = @Content)
    })
    public ResponseEntity<?> findAll() {
        try {
            List<Booking> bookings = bookingService.findAll();
            if (bookings.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No bookings found");
            }
            List<BookingResponseDTO> responseDTOs = bookings.stream()
                    .map(BookingMapper::toDTO)
                    .toList();
            return ResponseEntity.ok(responseDTOs);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not retrieve bookings");
        }
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get an booking")
    @ApiResponses(value ={
            @ApiResponse(responseCode = "200", description = "booking found",
                    content = @Content(schema = @Schema(implementation = BookingResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "booking not found",
                    content = @Content)
    })
    public ResponseEntity<?> findById(
            @Parameter(description = "Id of booking to get")
            @PathVariable("id") Integer id
    ) {
        try {
            Booking booking = bookingService.findById(id);
            return ResponseEntity.ok(BookingMapper.toDTO(booking));
        } catch (EntityNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "booking was not found");
        }
    }
}
