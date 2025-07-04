package com.example.backend_buzzTrip.adult;


import com.example.backend_buzzTrip.adult.Adult;
import com.example.backend_buzzTrip
.booking.BookingResponseDTO;
import com.example.backend_buzzTrip
.user.User;

public class AdultMapper {
    public static AdultResponseDTO toDTO(Adult adult) {
        AdultResponseDTO adultDTO = new AdultResponseDTO();

        adultDTO.setId(adult.getId());
        adultDTO.setFirstName(adult.getFirstName());
        adultDTO.setLastName(adult.getLastName());
        adultDTO.setBirthdate(adult.getBirthdate());
        adultDTO.setPassportNumber(adult.getPassportNumber());
        if (adult.getUser() != null) {
            adultDTO.setUserId(adult.getUser().getId());
        }

        return adultDTO;
    }

    public static Adult fromDTO(AdultRequestDTO adultRequestDTO){
        Adult adult = new Adult();

        adult.setFirstName(adultRequestDTO.getFirstName());
        adult.setLastName(adultRequestDTO.getLastName());
        adult.setBirthdate(adultRequestDTO.getBirthdate());
        adult.setPassportNumber(adultRequestDTO.getPassportNumber());
        if (adultRequestDTO.getUserId() != null) {
            adult.setUser(new User(adultRequestDTO.getUserId())); // oder userService.findById()
        }

        return adult;
    }
}
