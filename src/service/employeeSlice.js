import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      // Serialize date fields
      const serializedData = {
        ...action.payload,
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      };
      // Push the new employee to the state
      state.employees.push(serializedData);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
