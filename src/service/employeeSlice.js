import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employee: {},
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;