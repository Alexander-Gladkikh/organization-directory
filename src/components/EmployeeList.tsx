import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteEmployee } from '../features/employee/employeeSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const EmployeeList: React.FC = () => {
  const { organizationId } = useParams<{ organizationId: string }>();
  const employees = useSelector((state: RootState) => 
    state.employees.employees.filter(emp => emp.organizationId === organizationId)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => navigate(`/organizations/${organizationId}/employees/new`)}>
        Add Employee
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(emp => (
            <TableRow key={emp.id}>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.position}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/organizations/${organizationId}/employees/edit/${emp.id}`)}>Edit</Button>
                <Button onClick={() => handleDelete(emp.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={() => navigate('/organizations')}>Back to Organizations</Button>
    </div>
  );
};

export default EmployeeList;
