package com.lab.sadproject.dal;

import com.lab.sadproject.entity.DetailInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailInformationDal extends JpaRepository<DetailInformation, String> {
}
