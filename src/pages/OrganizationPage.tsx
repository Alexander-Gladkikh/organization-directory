import React from 'react';
import OrganizationList from '../components/OrganizationList';
import OrganizationForm from '../components/OrganizationForm';
import { Route, Routes } from 'react-router-dom';

const OrganizationPage: React.FC = () => (
  <Routes>
    <Route path="/" element={<OrganizationList />} />
    <Route path="new" element={<OrganizationForm />} />
    <Route path="edit/:id" element={<OrganizationForm isEditing />} />
  </Routes>
);

export default OrganizationPage;
