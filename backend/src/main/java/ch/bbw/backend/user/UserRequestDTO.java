package ch.bbw.backend.user;

import ch.bbw.backend.adult.AdultRequestDTO;

import java.time.LocalDate;
import java.util.Objects;

public class UserRequestDTO {
    private String email;
    private String password;
    private AdultRequestDTO adult;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public AdultRequestDTO getAdult() {
        return adult;
    }

    public void setAdult(AdultRequestDTO adult) {
        this.adult = adult;
    }
}
