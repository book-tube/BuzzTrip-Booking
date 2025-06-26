package com.example.backend_buzzTrip
.flight;

import java.util.Objects;

public class FlightResponseDTO extends FlightRequestDTO{
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
        FlightResponseDTO that = (FlightResponseDTO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id);
    }

    @Override
    public String toString() {
        return "FlightResponseDTO{" +
                "id=" + id +
                '}';
    }
}
