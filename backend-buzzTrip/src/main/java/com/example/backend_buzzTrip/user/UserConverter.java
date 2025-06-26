package com.example.backend_buzzTrip
.user;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Collections;
import java.util.List;

public class UserConverter implements Converter<Jwt, UserAuthenticationToken> {    @Override
    public UserAuthenticationToken convert(Jwt jwt) {
        int id = Integer.parseInt(jwt.getSubject());
        String username = jwt.getClaimAsString("username");
        String role = jwt.getClaimAsString("role");

        User user = new User();
        user.setId(id);

        List<SimpleGrantedAuthority> authorities = Collections.singletonList(
                new SimpleGrantedAuthority("ROLE_" + role)
        );

        return new UserAuthenticationToken(jwt, user, authorities);

    }
}