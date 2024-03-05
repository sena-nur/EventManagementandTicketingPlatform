// src/components/CityPlateList.js
import React from 'react';

import '../CityPlateList.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const citiesAndPlates = [
    { city: 'Adana', plate: 1 },
    { city: 'Adıyaman', plate: 2 },
    { city: 'Ağrı', plate: 4 },
    { city: 'Amasya', plate: 5 },
    { city: 'Ankara', plate: 6 },
    { city: 'Antalya', plate: 7 },
    { city: 'Artvin', plate: 8 },
    { city: 'Aydın', plate: 9 },
    { city: 'Balıkesir', plate: 10 },
    { city: 'Bilecik', plate: 11 },
    { city: 'Bingöl', plate: 12 },
    { city: 'Bitlis', plate: 13 },
    { city: 'Bolu', plate: 14 },
    { city: 'Burdur', plate: 15 },
    { city: 'Bursa', plate: 16 },
    { city: 'Çanakkale', plate: 17 },
    { city: 'Çankırı', plate: 18 },
    { city: 'Çorum', plate: 19 },
    { city: 'Denizli', plate: 20 },
    { city: 'Diyarbakır', plate: 21 },
    { city: 'Edirne', plate: 22 },
    { city: 'Elazığ', plate: 23 },
    { city: 'Erzincan', plate: 24 },
    { city: 'Erzurum', plate: 25 },
    { city: 'Eskişehir', plate: 26 },
    { city: 'Gaziantep', plate: 27 },
    { city: 'Giresun', plate: 28 },
    { city: 'Gümüşhane', plate: 29 },
    { city: 'Hakkari', plate: 30 },
    { city: 'Hatay', plate: 31 },
    { city: 'Isparta', plate: 32 },
    { city: 'Mersin', plate: 33 },
    { city: 'İstanbul', plate: 34 },
    { city: 'İzmir', plate: 35 },
    { city: 'Kars', plate: 36 },
    { city: 'Kastamonu', plate: 37 },
    { city: 'Kayseri', plate: 38 },
    { city: 'Kırklareli', plate: 39 },
    { city: 'Kırşehir', plate: 40 },
    { city: 'Kocaeli', plate: 41 },
    { city: 'Konya', plate: 42 },
    { city: 'Kütahya', plate: 43 },
    { city: 'Malatya', plate: 44 },
    { city: 'Manisa', plate: 45 },
    { city: 'Mardin', plate: 47 },
    { city: 'Muğla', plate: 48 },
    { city: 'Muş', plate: 49 },
    { city: 'Nevşehir', plate: 50 },
    { city: 'Niğde', plate: 51 },
    { city: 'Ordu', plate: 52 },
    { city: 'Rize', plate: 53 },
    { city: 'Sivas', plate: 58 },
    { city: 'Tekirdağ', plate: 59 },
    { city: 'Uşak', plate: 64 },
    { city: 'Van', plate: 65 },
    { city: 'Yozgat', plate: 66 },
    { city: 'Bartın', plate: 74 },
    { city: 'Ardahan', plate: 75 },
    { city: 'Iğdır', plate: 76 },
    { city: 'Yalova', plate: 77 },
    { city: 'Düzce', plate: 81 },
  ];

  function isNumeric(deger) {
    return /^\d+$/.test(deger);
  }

const CityPlateList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleOpenModalClick = () =>{
    setModalVisible(true);
  }

  const handleCloseModalClick = () =>{
    setModalVisible(false);
  }

  const handleCityPlateClick = (event) => {
    


    // console.log(event.target.children[0].innerHTML)
    console.log(event)
    let y = event.target.textContent
    let z = y.slice(-1)
    
    if (isNumeric(z)){
      y = y.slice(0,-1)
    }

    if (isNumeric(y.slice(-1))){
      y = y.slice(0,-1)
    }

      const x = y;

    // const x  = event.target.children[0].innerHTML;
      // Logic for handling the click event and navigating to Dashboard.jsx
      navigate('/Dashboard', { state: { sentence: x } });
    };
  
    return (


        


        <div>

          <div className={`modal ${modalVisible ? '' : ' hidden'}`}>
            <div className="modal-inside">
              
              <div className="modal-inside--inside">
              <div className="close-container">
                <button onClick={handleCloseModalClick} className="close-btn">
                  X
                </button>
              </div>
              <ul>
                <li><input className="event-input" type="text" placeholder="Name"/></li>
                <li><input className="event-input" type="text" placeholder="Location"/></li>
                <li><input className="event-input" type="text" placeholder="Date"/></li>
                <li><input className="event-input" type="text" placeholder="Price"/></li>
                <li><input className="event-input" type="text" placeholder="Address"/></li>
                <li><input className="event-input" type="text" placeholder="Description"/></li>
                <li><input className="event-input" type="text" placeholder="Artists"/></li>
                <li><input className="event-input" type="text" placeholder="Genre"/></li>
                <li><input className="event-input" type="text" placeholder="Type"/></li>
              </ul>
              <div className="event-btn-container">
                <button onClick={handleCloseModalClick} className="event-btn">
                  Create
                </button>
              </div>
              </div>
            </div>
          </div>


          <div className="background-image"></div>
          <div className="background-darkness"></div>
        <div className='container-all'>
          <div className='search-side'>
          <input className="search-input-left" type="text" placeholder="Search City"/>
          <div className="admin-side">
            <div className="create-event">
              <button onClick={handleOpenModalClick} className="create-event-btn">Create Event</button>
            </div>
          </div>
          
          </div>
    
          <div className="plate-side">
            <div className="city-plate-list">
              <div className='city-container'>
                {citiesAndPlates.map((item, index) => (
                  <div className='city-and-plate' key={index} onClick={handleCityPlateClick}>
                    <div className="city-container-inside">
                      <p className="city">{item.city}</p>
                      <div className="plate-container">
                        <p className="plate">{item.plate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          
    
        </div>
    
                </div>
      );
  };
  
  export default CityPlateList;