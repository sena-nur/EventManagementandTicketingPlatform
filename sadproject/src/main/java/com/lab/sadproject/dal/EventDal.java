package com.lab.sadproject.dal;

import com.lab.sadproject.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventDal extends JpaRepository<Event, String> {

}
