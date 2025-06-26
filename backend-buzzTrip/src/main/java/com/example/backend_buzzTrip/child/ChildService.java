package com.example.backend_buzzTrip
.child;

import com.example.backend_buzzTrip
.adult.AdultRequestDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChildService {
    private final ChildRepository childRepository;

    public ChildService(ChildRepository childRepository) {
        this.childRepository = childRepository;
    }

    public Child findById(Integer id) {
        return childRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Child with ID " + id + " not found"));
    }

    public List<Child> findAll() {
        return childRepository.findAll();
    }

    public Child save(Child child) {
        return childRepository.save(child);
    }

    public void deleteById(Integer id) {
        childRepository.deleteById(id);
    }

    public Child createChild(ChildRequestDTO dto){
        Child child = ChildMapper.fromDTO(dto);

        return childRepository.save(child);
    }
}
