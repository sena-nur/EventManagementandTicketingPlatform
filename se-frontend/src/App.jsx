// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { Link } from 'react-router-dom';
import CityPlateList from './components/CityPlateList';
import ActivityDetails from './components/ActivityDetails';
import TicketBuy from './components/TicketBuy';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of directly using Route */}
        {/* Define routes for each page */}
        <Route path="/" element={<CityPlateList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<ActivityDetails/>} />
        <Route path='/buy' element={<TicketBuy/>}/>
     ß
        
        
        {/* Other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;