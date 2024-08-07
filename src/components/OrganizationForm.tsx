import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { addOrganization, editOrganization } from '../features/organization/organizationSlice';
import { useNavigate, useParams } from 'react-router-dom';

interface OrganizationFormProps {
  isEditing?: boolean;
  initialValues?: { id?: string; name: string; address: string };
}

const OrganizationForm: React.FC<OrganizationFormProps> = ({ isEditing = false, initialValues = { name: '', address: '' } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleSubmit = (values: { id?: string; name: string; address: string }) => {
    if (isEditing) {
      dispatch(editOrganization({ id: id!, ...values }));
    } else {
      dispatch(addOrganization({ id: Date.now().toString(), ...values }));
    }
    navigate('/organizations');
  };

  return (
    <Dialog open>
      <DialogTitle>{isEditing ? 'Edit Organization' : 'Add Organization'}</DialogTitle>
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
                name="address"
                label="Address"
                value={values.address}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <DialogActions>
                <Button onClick={() => navigate('/organizations')}>Cancel</Button>
                <Button type="submit">{isEditing ? 'Save' : 'Add'}</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default OrganizationForm;
