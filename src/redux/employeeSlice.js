import { configureStore, createSlice } from '@reduxjs/toolkit';


const employeeSlice = createSlice({
    name: 'Newemployee',
    initialState: {
        employee: [],
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employee.push(action.payload);
        },

    }
})

export const employeeStore = configureStore({
    reducer: {
        employee: employeeSlice.reducer,
    }
})