import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { addEmployee, editEmployee } from '../features/employee/employeeSlice';
import { useNavigate, useParams } from 'react-router-dom';

interface EmployeeFormProps {
  isEditing?: boolean;
  initialValues?: { id?: string; organizationId?: string; name: string; position: string };
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ isEditing = false, initialValues = { name: '', position: '' } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { organizationId, id } = useParams<{ organizationId: string; id: string }>();

  const handleSubmit = (values: { id?: string; name: string; position: string }) => {
    if (isEditing) {
      dispatch(editEmployee({ id: id!, organizationId: organizationId!, ...values }));
    } else {
      dispatch(addEmployee({ id: Date.now().toString(), organizationId: organizationId!, ...values }));
    }
    navigate(`/organizations/${organizationId}/employees`);
  };

  return (
    <Dialog open>
      <DialogTitle>{isEditing ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
      <DialogContent>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange, values }) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Field
                as={TextField}
                name="position"
                label="Position"
                value={values.position}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <DialogActions>
                <Button onClick={() => navigate(`/organizations/${organizationId}/employees`)}>Cancel</Button>
                <Button type="submit">{isEditing ? 'Save' : 'Add'}</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeForm;
