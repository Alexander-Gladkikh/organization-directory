import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Organization {
  id: string;
  name: string;
  address: string;
}

export interface OrganizationState {
  organizations: Organization[];
}

const initialState: OrganizationState = {
  organizations: [],
};

const organizationSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    addOrganization(state, action: PayloadAction<Organization>) {
      state.organizations.push(action.payload);
    },
    editOrganization(state, action: PayloadAction<Organization>) {
      const index = state.organizations.findIndex(org => org.id === action.payload.id);
      if (index !== -1) {
        state.organizations[index] = action.payload;
      }
    },
    deleteOrganization(state, action: PayloadAction<string>) {
      state.organizations = state.organizations.filter(org => org.id !== action.payload);
    },
  },
});

export const { addOrganization, editOrganization, deleteOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;
