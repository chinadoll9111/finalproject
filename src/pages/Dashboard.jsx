import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import EmployeeTable from '../components/EmployeeTable';
import SignUp from '../pages/Signup';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1">
      <Topbar />
      <EmployeeTable />
    </div>
    <div>
<Link
  to="/signup"
  className="btn btn-success"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  }}
>
  Sign Up
</Link>

</div>
  </div>
);


export default Dashboard;
