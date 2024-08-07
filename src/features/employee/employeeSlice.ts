import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Employee {
  id: string;
  organizationId: string;
  name: string;
  position: string;
}

export interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);
    },
    editEmployee(state, action: PayloadAction<Employee>) {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee(state, action: PayloadAction<string>) {
      state.employees = state.employees.filter(emp => emp.id !== action.payload);
    },
  },
});

export const { addEmployee, editEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
