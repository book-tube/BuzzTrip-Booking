package ch.bbw.backend.PassengerAssignment;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(PassengerAssignmentController.PATH)
public class PassengerAssignmentController {

    public static final String PATH = "/passengerAssignments";

    private final PassengerAssignmentService passengerAssignmentService;

    public PassengerAssignmentController(PassengerAssignmentService passengerAssignmentService) {
        this.passengerAssignmentService = passengerAssignmentService;
    }

    @GetMapping
    @Operation(summary = "Get all passenger assignments")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All passenger assignments found",
                    content = @Content(schema = @Schema(implementation = PassengerAssignmentResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "No passenger assignments found", content = @Content)
    })
    public ResponseEntity<List<PassengerAssignmentResponseDTO>> findAll() {
        List<PassengerAssignment> assignments = passengerAssignmentService.findAll();
        if (assignments.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No passenger assignments found");
        }
        List<PassengerAssignmentResponseDTO> dtos = assignments.stream()
                .map(passengerAssignmentService::toDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get passenger assignment by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Passenger assignment found",
                    content = @Content(schema = @Schema(implementation = PassengerAssignmentResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "Passenger assignment not found", content = @Content)
    })
    public ResponseEntity<PassengerAssignmentResponseDTO> getById(
            @Parameter(description = "ID of the passenger assignment to retrieve")
            @PathVariable Integer id
    ) {
        try {
            return ResponseEntity.ok(passengerAssignmentService.getById(id));
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @PostMapping
    @Operation(summary = "Create a new passenger assignment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Passenger assignment created",
                    content = @Content(schema = @Schema(implementation = PassengerAssignmentResponseDTO.class)))
    })
    public ResponseEntity<PassengerAssignmentResponseDTO> create(
            @RequestBody PassengerAssignmentRequestDTO dto
    ) {
        PassengerAssignmentResponseDTO created = passengerAssignmentService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an existing passenger assignment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Passenger assignment updated",
                    content = @Content(schema = @Schema(implementation = PassengerAssignmentResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "Passenger assignment not found", content = @Content)
    })
    public ResponseEntity<PassengerAssignmentResponseDTO> update(
            @PathVariable Integer id,
            @RequestBody PassengerAssignmentRequestDTO dto
    ) {
        try {
            PassengerAssignmentResponseDTO updated = passengerAssignmentService.update(id, dto);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a passenger assignment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Passenger assignment deleted"),
            @ApiResponse(responseCode = "404", description = "Passenger assignment not found", content = @Content)
    })
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        try {
            passengerAssignmentService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}
