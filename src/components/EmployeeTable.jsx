import React from 'react';
import { FaTrash } from 'react-icons/fa';

const employees = [
  { first: 'Joshua', last: 'Bakare', email: 'josh.bakery@gmail.com', phone: '+2348012345678', role: 'Admin' },
  { first: 'Jane', last: 'Clement', email: 'josh.bakery@gmail.com', phone: '+2348012345678', role: 'Staff' },
  { first: 'Hannah', last: 'Johnson', email: 'josh.bakery@gmail.com', phone: '+2348012345678', role: 'Staff' },
  { first: 'John', last: 'Ngoka', email: 'josh.bakery@gmail.com', phone: '+2348012345678', role: 'Staff' },
  { first: 'Omotayo', last: 'Adeleke', email: 'josh.bakery@gmail.com', phone: '+2348012345678', role: 'Staff' },
  { first: 'Gloria', last: 'Amadi', email: 'josh.bakery@gmail.com', phone: '+2348012345678', role: 'Staff' },
];

const EmployeeTable = () => (
  <div className="p-4">
    <h5 className="fw-bold">Josh Bakery Ventures</h5>
    <p className="text-end text-muted">62, Bode Thomas, Surulere, Lagos</p>
    <div className="d-flex mb-3">
      <select className="form-select w-auto me-2">
        <option>Change role</option>
      </select>
      <button className="btn btn-success me-2">Change</button>
      <input className="form-control w-25" placeholder="Enter staff name here..." />
    </div>
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, i) => (
          <tr key={i}>
            <td><input type="checkbox" /></td>
            <td>{emp.first}</td>
            <td>{emp.last}</td>
            <td>{emp.email}</td>
            <td>{emp.phone}</td>
            <td>{emp.role}</td>
            <td><FaTrash style={{ cursor: 'pointer' }} /></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="d-flex justify-content-between mt-3">
      <button className="btn btn-success">Add New</button>
      <div>
        <span>1 of 2</span>
        <span className="ms-2 text-success">● ●</span>
      </div>
    </div>
    
  </div>

);

export default EmployeeTable;
