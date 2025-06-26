package com.example.backend_buzzTrip
.flight;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(FlightController.PATH)
public class FlightController {

    public static final String PATH = "/flights";

    private final FlightService flightService;

    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping
    @Operation(summary = "Get all flights")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All flights found",
                    content = @Content(schema = @Schema(implementation = FlightResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "No flights found", content = @Content)
    })
    public ResponseEntity<?> findAll() {
        List<Flight> flights = flightService.findAll();
        if (flights.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No flights found");
        }
        List<FlightResponseDTO> responseDTOs = flights.stream()
                .map(FlightMapper::toDTO)
                .toList();
        return ResponseEntity.ok(responseDTOs);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a flight by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Flight found",
                    content = @Content(schema = @Schema(implementation = FlightResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "Flight not found", content = @Content)
    })
    public ResponseEntity<?> findById(
            @Parameter(description = "ID of flight to get")
            @PathVariable Integer id
    ) {
        try {
            Flight flight = flightService.findById(id);
            return ResponseEntity.ok(FlightMapper.toDTO(flight));
        } catch (EntityNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Flight was not found");
        }
    }

    @PostMapping
    @Operation(summary = "Create a new flight")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Flight created",
                    content = @Content(schema = @Schema(implementation = FlightResponseDTO.class)))
    })
    public ResponseEntity<FlightResponseDTO> create(@RequestBody FlightRequestDTO dto) {
        Flight saved = flightService.createFlight(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(FlightMapper.toDTO(saved));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an existing flight")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Flight updated",
                    content = @Content(schema = @Schema(implementation = FlightResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "Flight not found", content = @Content)
    })
    public ResponseEntity<?> update(
            @PathVariable Integer id,
            @RequestBody FlightRequestDTO dto
    ) {
        try {
            Flight flight = FlightMapper.fromDTO(dto);
            flight.setId(id);
            Flight updated = flightService.save(flight);
            return ResponseEntity.ok(FlightMapper.toDTO(updated));
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a flight")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Flight deleted"),
            @ApiResponse(responseCode = "404", description = "Flight not found", content = @Content)
    })
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        try {
            flightService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}

