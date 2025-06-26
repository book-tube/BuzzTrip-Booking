package ch.bbw.backend.PassengerAssignment;

import java.util.Objects;

public class PassengerAssignmentResponseDTO extends PassengerAssignmentRequestDTO{
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        PassengerAssignmentResponseDTO that = (PassengerAssignmentResponseDTO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id);
    }

    @Override
    public String toString() {
        return "PassengerAssignmentResponseDTO{" +
                "id=" + id +
                '}';
    }
}
