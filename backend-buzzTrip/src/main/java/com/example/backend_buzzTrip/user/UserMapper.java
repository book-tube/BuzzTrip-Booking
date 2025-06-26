package com.example.backend_buzzTrip
.user;

import com.example.backend_buzzTrip
.adult.AdultRequestDTO;
import com.example.backend_buzzTrip
.adult.AdultResponseDTO;

public class UserMapper {
    public static User fromDTO(UserRequestDTO userDTO) {
        User user = new User();
        AdultRequestDTO adult = userDTO.getAdult();

        user.setFirstName(adult.getFirstName());
        user.setLastName(adult.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setPassportNumber(adult.getPassportNumber());
        user.setBirthday(adult.getBirthdate());

        return user;
    }


    public static UserResponseDTO toDTO(User user) {
        UserResponseDTO userDTO = new UserResponseDTO();

        userDTO.setId(user.getId());
        userDTO.setBirthday(user.getBirthday());
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPassportNumber(user.getPassportNumber());
        return userDTO;
    }

    public static TokenResponseDTO toDTO(User user, String token) {
        TokenResponseDTO userDTO = new TokenResponseDTO();
        userDTO.setToken(token);
        userDTO.setUser(toDTO(user));
        return userDTO;
    }

    public static UserLightDTO toLightDTO(User user) {
        if (user == null) return null;
        UserLightDTO dto = new UserLightDTO();
        dto.setId(user.getId());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        return dto;
    }
}
