import { configureStore } from "@reduxjs/toolkit";
import organizationReducer, {
  OrganizationState,
} from "./features/organization/organizationSlice";
import employeeReducer, {
  EmployeeState,
} from "./features/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    organizations: organizationReducer,
    employees: employeeReducer,
  },
});

export type RootState = {
  organizations: OrganizationState;
  employees: EmployeeState;
};

export type AppDispatch = typeof store.dispatch;
