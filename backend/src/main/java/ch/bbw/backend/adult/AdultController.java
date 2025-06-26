package ch.bbw.backend.adult;

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
@RequestMapping(AdultController.PATH)
public class AdultController {
    public static final String PATH = "/adults";

    private final AdultService adultService;

    public AdultController(AdultService adultService) {
        this.adultService = adultService;
    }

    @GetMapping
    @Operation(summary = "Get all adults")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All adults found",
                    content = @Content(schema = @Schema(implementation = AdultResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "No adults found", content = @Content)
    })
    public ResponseEntity<?> findAll() {
        List<Adult> adults = adultService.findAll();
        if (adults.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No adults found");
        }
        List<AdultResponseDTO> responseDTOs = adults.stream()
                .map(AdultMapper::toDTO)
                .toList();
        return ResponseEntity.ok(responseDTOs);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get an adult by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Adult found",
                    content = @Content(schema = @Schema(implementation = AdultResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "Adult not found", content = @Content)
    })
    public ResponseEntity<?> findById(
            @Parameter(description = "Id of adult to get")
            @PathVariable("id") Integer id
    ) {
        try {
            Adult adult = adultService.findById(id);
            return ResponseEntity.ok(AdultMapper.toDTO(adult));
        } catch (EntityNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Adult was not found");
        }
    }

    @PostMapping
    @Operation(summary = "Create a new adult")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Adult created",
                    content = @Content(schema = @Schema(implementation = AdultResponseDTO.class)))
    })
    public ResponseEntity<AdultResponseDTO> create(@RequestBody AdultRequestDTO dto) {
        Adult saved = adultService.save(AdultMapper.fromDTO(dto));
        return ResponseEntity.status(HttpStatus.CREATED).body(AdultMapper.toDTO(saved));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an existing adult")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Adult updated",
                    content = @Content(schema = @Schema(implementation = AdultResponseDTO.class))),
            @ApiResponse(responseCode = "404", description = "Adult not found", content = @Content)
    })
    public ResponseEntity<?> update(
            @PathVariable Integer id,
            @RequestBody AdultRequestDTO dto
    ) {
        try {
            Adult updated = adultService.update(id, AdultMapper.fromDTO(dto));
            return ResponseEntity.ok(AdultMapper.toDTO(updated));
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete an adult")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Adult deleted"),
            @ApiResponse(responseCode = "404", description = "Adult not found", content = @Content)
    })
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        try {
            adultService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}
