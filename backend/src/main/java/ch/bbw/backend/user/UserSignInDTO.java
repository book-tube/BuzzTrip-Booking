package ch.bbw.backend.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserSignInDTO {


    @NotBlank(message = "Password can't be blank")
    @Size(min = 8, max = 255)
    private String password;

    @NotBlank(message = "Email can't be blank")
    @Size(min = 8, max = 255)
    private String email;



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
