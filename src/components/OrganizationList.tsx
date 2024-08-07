import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteOrganization } from '../features/organization/organizationSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const OrganizationList: React.FC = () => {
  const organizations = useSelector((state: RootState) => state.organizations.organizations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    dispatch(deleteOrganization(id));
  };

  const handleViewEmployees = (id: string) => {
    navigate(`/organizations/${id}/employees`);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => navigate('/organizations/new')}>
        Add Organization
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {organizations.map(org => (
            <TableRow key={org.id}>
              <TableCell>{org.name}</TableCell>
              <TableCell>{org.address}</TableCell>
              <TableCell>
                <Button onClick={() => handleViewEmployees(org.id)}>View Employees</Button>
                <Button onClick={() => navigate(`/organizations/edit/${org.id}`)}>Edit</Button>
                <Button onClick={() => handleDelete(org.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrganizationList;
