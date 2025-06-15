//package ch.bbw.backend;

//import ch.bbw.backend.user.Role;
//import ch.bbw.backend.user.User;
//import ch.bbw.backend.user.UserService;
//import jakarta.transaction.Transactional;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;

//@Component
//public class DatabaseSeed implements CommandLineRunner {
//  private final UserService userService;
//
//  public DatabaseSeed(UserService userService) {
//      this.userService = userService;
//  }
//
//@Transactional
//  @Override
//  public void run(String... args) {
//      // Nur erstellen, wenn noch nicht vorhanden
//      if (!userService.existsByEmail("admin@bbcag.com")) {
//          User user = new User();
//          user.setEmail("admin@bbcag.com");
//          user.setPassword("admin1234"); // Achtung: vermutlich musst du hier noch verschlüsseln!
//          user.setUsername("Admin");
//          user.setRole(Role.ADMIN);
//          userService.create(user);
//      }

//  }
//}
