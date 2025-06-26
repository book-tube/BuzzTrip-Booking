package ch.bbw.backend.PassengerAssignment;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PassengerAssignmentService {
    private final PassengerAssignmentRepository passengerAssignmentRepository;
    private final PassengerAssignmentMapper passengerAssignmentMapper;

    public PassengerAssignmentService(PassengerAssignmentRepository passengerAssignmentRepository, PassengerAssignmentMapper passengerAssignmentMapper) {
        this.passengerAssignmentRepository = passengerAssignmentRepository;
        this.passengerAssignmentMapper = passengerAssignmentMapper;
    }

    public PassengerAssignmentResponseDTO create(PassengerAssignmentRequestDTO dto) {
        PassengerAssignment entity = passengerAssignmentMapper.fromDTO(dto, null);
        PassengerAssignment saved = passengerAssignmentRepository.save(entity);
        return passengerAssignmentMapper.toDTO(saved);
    }

    public List<PassengerAssignment> findAll() {
        return passengerAssignmentRepository.findAll();
    }


    public PassengerAssignmentResponseDTO getById(Integer id) {
        return passengerAssignmentRepository.findById(id)
                .map(passengerAssignmentMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("PassengerAssignment not found"));
    }

    public void delete(Integer id) {
        passengerAssignmentRepository.deleteById(id);
    }

    public PassengerAssignmentResponseDTO update(Integer id, PassengerAssignmentRequestDTO dto) {
        PassengerAssignment entity = passengerAssignmentMapper.fromDTO(dto, id);
        PassengerAssignment saved = passengerAssignmentRepository.save(entity);
        return passengerAssignmentMapper.toDTO(saved);
    }

    public PassengerAssignmentResponseDTO toDTO(PassengerAssignment entity) {
        return passengerAssignmentMapper.toDTO(entity);
    }


}
