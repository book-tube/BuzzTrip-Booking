
package ch.bbw.backend.child;

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
@RequestMapping(ChildController.PATH)
public class ChildController {

       
    public static final String PATH = "/children";

       
    private final ChildService childService;

       

    public ChildController(ChildService childService) {
        this.childService = childService;
    }

       @GetMapping   @Operation(summary="Get all children")   @ApiResponses(value={           @ApiResponse(responseCode="200",description="All children found",                   content=@Content(schema=@Schema(implementation=ChildResponseDTO.class))),           @ApiResponse(responseCode="404",description="No children found",content=@Content)   

    })   

    public ResponseEntity<?> findAll() {
        List<Child> children = childService.findAll();
        if (children.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No children found");
        }
        List<ChildResponseDTO> responseDTOs = children.stream()
                .map(ChildMapper::toDTO)
                .toList();
        return ResponseEntity.ok(responseDTOs);
    }

       @GetMapping("/{id}")   @Operation(summary="Get a child by ID")   @ApiResponses(value={           @ApiResponse(responseCode="200",description="Child found",                   content=@Content(schema=@Schema(implementation=ChildResponseDTO.class))),           @ApiResponse(responseCode="404",description="Child not found",content=@Content)   

    })   

    public ResponseEntity<?> findById(
            @Parameter(description = "ID of child to get")
            @PathVariable Integer id
    ) {
        try {
            Child child = childService.findById(id);
            return ResponseEntity.ok(ChildMapper.toDTO(child));
        } catch (EntityNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Child was not found");
        }
    }

    @PostMapping
    @Operation(summary = "Create a new child")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Child created",
                    content = @Content(schema = @Schema(implementation = ChildResponseDTO.class)))
    })   

    public ResponseEntity<ChildResponseDTO> create(@RequestBody ChildRequestDTO dto) {
        Child saved = childService.createChild(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(ChildMapper.toDTO(saved));
    }

       @PutMapping("/{id}")   @Operation(summary="Update an existing child")   @ApiResponses(value={           @ApiResponse(responseCode="200",description="Child updated",                   content=@Content(schema=@Schema(implementation=ChildResponseDTO.class))),           @ApiResponse(responseCode="404",description="Child not found",content=@Content)   

    })   

    public ResponseEntity<?> update(
            @PathVariable Integer id,
            @RequestBody ChildRequestDTO dto
    ) {
        try {
            Child updated = childService.save(ChildMapper.fromDTO(dto));
            updated.setId(id); // optional, falls du explizit setzen willst
            return ResponseEntity.ok(ChildMapper.toDTO(updated));
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a child")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Child deleted"),
            @ApiResponse(responseCode = "404", description = "Child not found", content = @Content)
    })   

    public ResponseEntity<?> delete(@PathVariable Integer id) {
        try {
            childService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}
