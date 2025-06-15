package ch.bbw.backend.user;

public class UserMapper {
    public static User fromDTO(UserRequestDTO userDTO) {
        User user = new User();

        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setPassport_number(userDTO.getPassport_number());
        user.setBirthday(userDTO.getBirthday());
        return user;
    }

    public static UserResponseDTO toDTO(User user) {
        UserResponseDTO userDTO = new UserResponseDTO();

        userDTO.setId(user.getId());
        userDTO.setBirthday(user.getBirthday());
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPassport_number(user.getPassport_number());
        return userDTO;
    }

    public static TokenResponseDTO toDTO(User user, String token) {
        TokenResponseDTO userDTO = new TokenResponseDTO();
        userDTO.setToken(token);
        userDTO.setUser(toDTO(user));
        return userDTO;
    }
}
