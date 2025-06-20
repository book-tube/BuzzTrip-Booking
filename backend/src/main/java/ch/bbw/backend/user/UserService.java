package ch.bbw.backend.user;

import ch.bbw.backend.configuration.JWTConfiguration;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final JWTConfiguration jwtConfiguration;
    private final PasswordEncoder passwordEncoder;

    private UserService(UserRepository userRepository, JWTConfiguration jwtConfiguration, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtConfiguration = jwtConfiguration;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(UserRequestDTO dto) {
        User user = UserMapper.fromDTO(dto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(EntityNotFoundException::new);
    }

    public String generateToken(User user) {
        JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                .subject(user.getId() + "")
                .claim("username", user.getEmail())
                .expirationTime(new Date(new Date().getTime() + jwtConfiguration.getExpiration()))
                .build();

        SignedJWT signedJWT = new SignedJWT(new JWSHeader(JWSAlgorithm.parse(jwtConfiguration.getAlgorithm())), claimsSet);
        try {
            JWSSigner signer = new MACSigner(jwtConfiguration.getSecret());
            signedJWT.sign(signer);
            return signedJWT.serialize();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
