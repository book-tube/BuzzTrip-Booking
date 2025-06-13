package ch.bbw.backend.user;

public class UserMapper {
    public static User fromDTO(UserRequestDTO userDTO) {
        User user = new User();

        user.setBirthday(userDTO.getBirthday());
        user.setEmail(userDTO.getEmail());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        return user;
    }

    public static UserResponseDTO toDTO(User user) {
        UserResponseDTO userDTO = new UserResponseDTO();

        userDTO.setBirthday(user.getBirthday());
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPassword(user.getPassword());
        userDTO.setId(user.getId());
        userDTO.setPassport_number(user.getPassport_number());
        return userDTO;
    }
}
