package ch.bbw.backend.adult;

import java.util.Objects;

public class AdultResponseDTO extends AdultRequestDTO {
    private Integer id;
    private Integer userId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public Integer getUserId() {
        return userId;
    }

    @Override
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        AdultResponseDTO that = (AdultResponseDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(userId, that.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id, userId);
    }

    @Override
    public String toString() {
        return "AdultResponseDTO{" +
                "id=" + id +
                ", userId=" + userId +
                '}';
    }
}
