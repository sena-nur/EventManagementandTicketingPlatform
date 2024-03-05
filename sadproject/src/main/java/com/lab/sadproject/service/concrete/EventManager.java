package com.lab.sadproject.service.concrete;

import com.lab.sadproject.dal.DetailInformationDal;
import com.lab.sadproject.dal.EventDal;
import com.lab.sadproject.dto.DetailInformationDTO;
import com.lab.sadproject.dto.EventDTO;
import com.lab.sadproject.entity.DetailInformation;
import com.lab.sadproject.entity.Event;
import com.lab.sadproject.service.implementation.EventImp;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventManager implements EventImp {


    private final DetailInformationDal detailDal;

    private final EventDal eventDal;

    public EventManager(DetailInformationDal detailDal, EventDal eventDal) {
        this.detailDal = detailDal;
        this.eventDal = eventDal;
    }


    @Override
    public Event createEvent(EventDTO eventDTO) {
        Event event = dtoToEntityEvent(eventDTO);
        try {
            return eventDal.save(event);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public Event updateEvent(String id, EventDTO eventDTO) {

        Optional<Event> optionalExistingEvent = eventDal.findById(id);
        if (optionalExistingEvent.isEmpty()) {
            throw new RuntimeException();
        }
        Event existingEvent = optionalExistingEvent.get();

        if (eventDTO.getName() != null) {
            existingEvent.setName(eventDTO.getName());
        }
        if (eventDTO.getLocation() != null) {
            existingEvent.setLocation(eventDTO.getLocation());
        }
        if (eventDTO.getDate() != null) {
            existingEvent.setDate(eventDTO.getDate());
        }
        if (eventDTO.getPrice() != null) {
            existingEvent.setPrice(eventDTO.getPrice());
        }
        if (eventDTO.getAddress() != null) {
            existingEvent.setAddress(eventDTO.getAddress());
        }
        if (eventDTO.getImageLink() != null) {
            existingEvent.setImageLink(eventDTO.getImageLink());
        }
        /*
        if (eventDTO.getDetails() != null) {
            existingEvent.setDetails(dtoToEntityDetails(eventDTO.getDetails()));
        }
        */
        try {
            return eventDal.save(existingEvent);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Event getEvent(String id) {
        Optional<Event> optionalEvent = eventDal.findById(id);
        if (optionalEvent.isEmpty()) {
            throw new RuntimeException("Event not found");
        }
        return optionalEvent.get();
    }

    @Override
    public void deleteEvent(String id) {
        eventDal.deleteById(id);
    }

    @Override
    public DetailInformation createDetails(DetailInformationDTO detailInformationDTODTO) {
        DetailInformation details = dtoToEntityDetails(detailInformationDTODTO);
        try {
            return detailDal.save(details);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public DetailInformation updateDetails(String id, DetailInformationDTO detailInformationDTO) {

        Optional<DetailInformation> optionalExistingDetails = detailDal.findById(id);
        if (optionalExistingDetails.isEmpty()) {
            throw new RuntimeException();
        }
        DetailInformation existingDetails = optionalExistingDetails.get();

        if (detailInformationDTO.getDescription() != null) {
            existingDetails.setDescription(detailInformationDTO.getDescription());
        }
        if (detailInformationDTO.getArtists() != null) {
            existingDetails.setArtists(detailInformationDTO.getArtists());
        }
        if (detailInformationDTO.getGenre() != null) {
            existingDetails.setGenre(detailInformationDTO.getGenre());
        }
        if (detailInformationDTO.getType() != null) {
            existingDetails.setType(detailInformationDTO.getType());
        }

        try {
            return detailDal.save(existingDetails);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public DetailInformation getDetails(String id) {
        Optional<DetailInformation> optionalDetails = detailDal.findById(id);
        if (optionalDetails.isEmpty()) {
            throw new RuntimeException("Details not found");
        }
        return optionalDetails.get();
    }

    @Override
    public void deleteDetails(String id) {
        detailDal.deleteById(id);
    }

    @Override
    public List<Event> findAllEvents() {
        try {
            return eventDal.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public Event dtoToEntityEvent(EventDTO eventDTO) {
        Event event = new Event();

        if (eventDTO.getName() != null) {
            event.setName(eventDTO.getName());
        }
        if (eventDTO.getLocation() != null) {
            event.setLocation(eventDTO.getLocation());
        }
        if (eventDTO.getDate() != null) {
            event.setDate(eventDTO.getDate());
        }
        if (eventDTO.getPrice() != null) {
            event.setPrice(eventDTO.getPrice());
        }
        if (eventDTO.getAddress() != null) {
            event.setAddress(eventDTO.getAddress());
        }
        if (eventDTO.getImageLink() != null) {
            event.setImageLink(eventDTO.getImageLink());
        }
        /*
        if (eventDTO.getDetails() != null) {
            event.setDetails(dtoToEntityDetails(eventDTO.getDetails()));
        }
        */
        return event;
    }

    public DetailInformation dtoToEntityDetails(DetailInformationDTO detailInformationDTO) {
        DetailInformation details = new DetailInformation();

        if (detailInformationDTO.getDescription() != null) {
            details.setDescription(detailInformationDTO.getDescription());
        }
        if (detailInformationDTO.getArtists() != null) {
            details.setArtists(detailInformationDTO.getArtists());
        }
        if (detailInformationDTO.getGenre() != null) {
            details.setGenre(detailInformationDTO.getGenre());
        }
        if (detailInformationDTO.getType() != null) {
            details.setType(detailInformationDTO.getType());
        }
        if (detailInformationDTO.getTicketInfo() != null) {
            details.setTicketInfo(detailInformationDTO.getTicketInfo());
        }

        return details;
    }
}
