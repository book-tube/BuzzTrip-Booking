package com.example.backend_buzzTrip
;

import com.example.backend_buzzTrip
.user.User;
import com.example.backend_buzzTrip
.user.UserRequestDTO;
import com.example.backend_buzzTrip
.user.UserService;
import jakarta.transaction.Transactional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeed implements CommandLineRunner {
  private final UserService userService;

  public DatabaseSeed(UserService userService) {
      this.userService = userService;
  }

@Transactional
  @Override
  public void run(String... args) {
      // Nur erstellen, wenn noch nicht vorhanden
      if (!userService.existsByEmail("admin@bbcag.com")) {
          UserRequestDTO userRequestDTO = new UserRequestDTO();
          userRequestDTO.setEmail("admin@bbcag.com");
          userRequestDTO.setPassword("admin1234"); // Achtung: vermutlich musst du hier noch verschlüsseln!
          userService.createUser(userRequestDTO);
      }
  }
}
