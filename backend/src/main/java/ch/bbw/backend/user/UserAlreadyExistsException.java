package ch.bbw.backend.user;

public class UserAlreadyExistsException extends RuntimeException {
    private final String field;

    public UserAlreadyExistsException(String message, String field) {
        super(message);
        this.field = field;
    }

    public String getField() {
        return field;
    }
}