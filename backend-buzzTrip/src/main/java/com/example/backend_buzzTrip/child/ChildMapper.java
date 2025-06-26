package com.example.backend_buzzTrip
.child;

public class ChildMapper {
    public static ChildResponseDTO toDTO(Child child) {
        ChildResponseDTO dto = new ChildResponseDTO();

        dto.setId(child.getId());
        dto.setPassportNumber(child.getPassportNumber());
        dto.setFirstName(child.getFirstName());
        dto.setLastName(child.getLastName());
        dto.setBirthDate(child.getBirthDate());
        dto.setGuardianName(child.getGuardianName());

        return dto;
    }

    public static Child fromDTO(ChildRequestDTO childDTO) {
        Child child = new Child();

        child.setFirstName(childDTO.getFirstName());
        child.setLastName(childDTO.getLastName());
        child.setBirthDate(childDTO.getBirthDate());
        child.setGuardianName(childDTO.getGuardianName());
        return child;
    }
}
