package ch.bbw.backend.child;

import java.time.LocalDate;
import java.util.Objects;

public class ChildRequestDTO {
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private String passportNumber;
    private String guardianName;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getPassportNumber() {
        return passportNumber;
    }

    public void setPassportNumber(String passportNumber) {
        this.passportNumber = passportNumber;
    }

    public String getGuardianName() {
        return guardianName;
    }

    public void setGuardianName(String guardianName) {
        this.guardianName = guardianName;
    }


    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        ChildRequestDTO that = (ChildRequestDTO) o;
        return Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(birthDate, that.birthDate) && Objects.equals(passportNumber, that.passportNumber) && Objects.equals(guardianName, that.guardianName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, birthDate, passportNumber, guardianName);
    }
}
