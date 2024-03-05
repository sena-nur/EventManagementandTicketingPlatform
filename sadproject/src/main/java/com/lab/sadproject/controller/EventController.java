package com.lab.sadproject.controller;

import com.lab.sadproject.dto.DetailInformationDTO;
import com.lab.sadproject.dto.EventDTO;
import com.lab.sadproject.entity.DetailInformation;
import com.lab.sadproject.entity.Event;
import com.lab.sadproject.service.implementation.EventImp;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/events")
@Tag(name = "Event Services", description = "Event Services")
public class EventController {

    private final EventImp eventImp;

    public EventController(EventImp eventImp) {
        this.eventImp = eventImp;
    }

    @PostMapping()
    public ResponseEntity<Event> createEvent(EventDTO eventDTO) {
        try {
            Event event = eventImp.createEvent(eventDTO);
            if (event != null) {
                return ResponseEntity.ok(event);
            } else {
                throw new RuntimeException("Error creating event");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable String id, EventDTO eventDTO) {
        try {
            Event event = eventImp.updateEvent(id, eventDTO);
            if (event != null) {
                return ResponseEntity.ok(event);
            } else {
                throw new RuntimeException("Error updating event");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        try {
            List<Event> events = eventImp.findAllEvents();
            if (events != null) {
                return ResponseEntity.ok(events);
            } else {
                throw new RuntimeException("Error getting events");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEvent(@PathVariable String id) {
        try {
            Event event = eventImp.getEvent(id);
            if (event != null) {
                return ResponseEntity.ok(event);
            } else {
                throw new RuntimeException("Error getting event");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable String id) {
        try {
            eventImp.deleteEvent(id);
            return ResponseEntity.ok("Event deleted successfully");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/details")
    public ResponseEntity<DetailInformation> createDetails(@RequestBody DetailInformationDTO detailsDTO) {
        try {
            DetailInformation createdDetails = eventImp.createDetails(detailsDTO);
            if (createdDetails != null) {
                return ResponseEntity.ok(createdDetails);
            } else {
                throw new RuntimeException("Error creating details");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/details/{id}")
    public ResponseEntity<DetailInformation> updateDetails(@PathVariable String id,
                                                           @RequestBody DetailInformationDTO detailsDTO) {
        try {
            DetailInformation updatedDetails = eventImp.updateDetails(id, detailsDTO);
            if (updatedDetails != null) {
                return ResponseEntity.ok(updatedDetails);
            } else {
                throw new RuntimeException("Error updating details");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<DetailInformation> getDetails(@PathVariable String id) {
        try {
            DetailInformation details = eventImp.getDetails(id);
            if (details != null) {
                return ResponseEntity.ok(details);
            } else {
                throw new RuntimeException("Error getting details");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/details/{id}")
    public ResponseEntity<String> deleteDetails(@PathVariable String id) {
        try {
            eventImp.deleteDetails(id);
            return ResponseEntity.ok("Details deleted successfully");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
