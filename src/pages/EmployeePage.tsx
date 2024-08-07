import React from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import { Route, Routes } from 'react-router-dom';

const EmployeePage: React.FC = () => (
  <Routes>
    <Route path="/" element={<EmployeeList />} />
    <Route path="new" element={<EmployeeForm />} />
    <Route path="edit/:id" element={<EmployeeForm isEditing />} />
  </Routes>
);

export default EmployeePage;
