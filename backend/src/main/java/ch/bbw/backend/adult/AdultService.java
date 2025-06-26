package ch.bbw.backend.adult;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdultService {
    private final AdultRepository adultRepository;

    public AdultService(AdultRepository adultRepository) {
        this.adultRepository = adultRepository;
    }

    public Adult save(Adult adult) {
        return adultRepository.save(adult);
    }

    public Adult findById(Integer id) {
        return adultRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Adult with ID " + id + " not found"));
    }

    public List<Adult> findAll() {
        return adultRepository.findAll();
    }

    public Adult update(Integer id, Adult updatedAdult) {
        Adult existing = findById(id);

        existing.setFirstName(updatedAdult.getFirstName());
        existing.setLastName(updatedAdult.getLastName());
        existing.setBirthdate(updatedAdult.getBirthdate());
        existing.setPassportNumber(updatedAdult.getPassportNumber());

        return adultRepository.save(existing);
    }


    public void deleteById(Integer id) {
        if (!adultRepository.existsById(id)) {
            throw new RuntimeException("Adult with ID " + id + " not found");
        }
        adultRepository.deleteById(id);
    }
}
