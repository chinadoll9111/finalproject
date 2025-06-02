import React from 'react';
import { FaUsers } from 'react-icons/fa';
import logo from '../assets/logo.png'; // ✅ Make sure this path is correct!
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => (
  <div className="bg-white border-end vh-100 p-3" style={{ width: '80px' }}>
    <div className="text-center mb-3">
      <img src={logo} alt="Logo" width="152" />
    </div>
    
    <div className="d-flex flex-column align-items-center bg-light p-3" style={{ height: '100vh', width: '60px' }}>
      <i className="bi bi-columns-gap fs-4 mb-4"></i>
      <i className="bi bi-collection-fill fs-4 mb-4"></i>
      <i class="bi bi-people-fill fs-4 mb-4"></i>
    </div>
    
  </div>
);

export default Sidebar;
