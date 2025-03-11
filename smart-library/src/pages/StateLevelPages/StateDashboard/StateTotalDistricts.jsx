import React, { useState, useEffect } from 'react';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateTotalDistricts.css';

const StateTotalDistricts = () => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');


  

  return (
    <div className="State-Total-Districts-Container">
      <StateAdminNavbar />
      <StateAdminSidebar />

    </div>
  );
};

export default StateTotalDistricts;