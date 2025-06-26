package ch.bbw.backend.flight;

public class FlightMapper {
    public static FlightResponseDTO toDTO(Flight flight) {
        FlightResponseDTO dto = new FlightResponseDTO();

        dto.setId(flight.getId());
        dto.setFlightNumber(flight.getFlightNumber());
        dto.setAirlineName(flight.getAirlineName());
        dto.setArrivalLocation(flight.getArrivalLocation());
        dto.setDepartureLocation(flight.getDepartureLocation());
        dto.setDepartureTime(flight.getDepartureTime());
        dto.setArrivalTime(flight.getArrivalTime());


        return dto;
    }

    public static Flight fromDTO(FlightRequestDTO flightDTO) {
        Flight flight = new Flight();

        flight.setFlightNumber(flightDTO.getFlightNumber());
        flight.setAirlineName(flightDTO.getAirlineName());
        flight.setArrivalLocation(flightDTO.getArrivalLocation());
        flight.setDepartureLocation(flightDTO.getDepartureLocation());
        flight.setDepartureTime(flightDTO.getDepartureTime());
        flight.setArrivalTime(flightDTO.getArrivalTime());
        flight.setPrice(flightDTO.getPrice());

        return flight;
    }
}
