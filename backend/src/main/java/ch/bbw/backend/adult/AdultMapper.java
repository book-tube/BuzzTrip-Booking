package ch.bbw.backend.adult;

import ch.bbw.backend.booking.BookingResponseDTO;

public class AdultMapper {
    public static AdultResponseDTO toDTO(Adult adult) {
        AdultResponseDTO adultDTO = new AdultResponseDTO();

        adultDTO.setId(adult.getId());
        adultDTO.setFirstName(adult.getFirstName());
        adultDTO.setLastName(adult.getLastName());
        adultDTO.setBirthdate(adult.getBirthdate());
        adultDTO.setPassportNumber(adult.getPassportNumber());

        return adultDTO;
    }

    public static Adult fromDTO(AdultRequestDTO adultRequestDTO){
        Adult adult = new Adult();

        adult.setFirstName(adultRequestDTO.getFirstName());
        adult.setLastName(adultRequestDTO.getLastName());
        adult.setBirthdate(adultRequestDTO.getBirthdate());
        adult.setPassportNumber(adultRequestDTO.getPassportNumber());

        return adult;
    }
}
