package ch.bbw.backend.user;

import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import jakarta.annotation.security.PermitAll;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(UserController.PATH)
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    public static final String PATH = "/users";

    private final UserService userService;
    private final AuthenticationManager authenticationManager;

    public UserController(UserService userService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/signin")
    @PermitAll
    @SecurityRequirements
    public ResponseEntity<?> signIn(@Valid @RequestBody UserSignInDTO userSignInDTO) {
        logger.debug("Attempting to sign in user with email: {}", userSignInDTO.getEmail());

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userSignInDTO.getEmail(), userSignInDTO.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = (User) authentication.getPrincipal();
        String token = userService.generateToken(user);
        TokenResponseDTO dto = UserMapper.toDTO(user, token);
        return ResponseEntity.ok(dto);
    }


    @PostMapping("/signup")
    @PermitAll
    @SecurityRequirements
    public ResponseEntity<?> signUp(@Valid @RequestBody UserRequestDTO userRequestDTO) {
        if(userService.existsByEmail(userRequestDTO.getEmail())) {
            throw new UserAlreadyExistsException("Email already exists", "email");
        }

        User user = userService.createUser(userRequestDTO);
        return ResponseEntity.ok(UserMapper.toDTO(user));
    }

}
