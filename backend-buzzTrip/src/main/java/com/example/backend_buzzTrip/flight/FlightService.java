package com.example.backend_buzzTrip
.flight;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {
    private final FlightRepository flightRepository;

    public FlightService(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }


    public Flight findById(Integer id){
        return flightRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Flight with ID " + id + " not found"));

    }

    public List<Flight> findAll(){
        return flightRepository.findAll();
    }

    public Flight save(Flight flight){
        return flightRepository.save(flight);
    }

    public void deleteById(Integer id){
        flightRepository.deleteById(id);
    }

    public Flight createFlight(FlightRequestDTO dto){
        Flight flight = FlightMapper.fromDTO(dto);

        return flightRepository.save(flight);
    }
}
