import { createSlice } from "@reduxjs/toolkit";

const EmpSlice = createSlice({
    name: "EmployeeList",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            return [...action.payload];
        },
        clearList: (state) => {
            return [];
        }
    }
})

export const { addEmployee, clearList } = EmpSlice.actions;
export default EmpSlice.reducer; 