package com.lab.sadproject.service.implementation;

import com.lab.sadproject.dto.DetailInformationDTO;
import com.lab.sadproject.dto.EventDTO;
import com.lab.sadproject.entity.DetailInformation;
import com.lab.sadproject.entity.Event;

import java.util.List;

public interface EventImp{

    public Event createEvent(EventDTO eventDTO);

    public Event updateEvent(String id, EventDTO eventDTO);

    public Event getEvent(String id);

    public void deleteEvent(String id);

    public DetailInformation createDetails(DetailInformationDTO detailInformationDTODTO);

    public DetailInformation updateDetails(String id, DetailInformationDTO detailInformationDTODTO);

    public DetailInformation getDetails(String id);

    public void deleteDetails(String id);

    public List<Event> findAllEvents();
}

