import { configureStore, createSlice } from '@reduxjs/toolkit';


const employeeSlice = createSlice({
    name: 'EmployeeAdded',
    initialState: {
        newEmployee: false,
    },
    reducers: {
        added: (state) => {
            state.newEmployee = true;
        }
    }
})

export const employeeStore = configureStore({
    reducer: {
        employee: employeeSlice.reducer,
    }
})

export const { added } = employeeSlice.actions;