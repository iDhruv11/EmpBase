import { createSlice } from "@reduxjs/toolkit";

const EmpSlice = createSlice({
    name: "EmployeeList",
    initialState: [{
        id: 1,
        fullName : "dhruv sharma",
        departmentName : "Tech", 
        employeeType : "Intern",
        country : "canada",
        emailId : "drv@gmail.com",
        phoneNo : 3434343434
    }, /*{
        id: 1,
        fullName : "dhruv sharma",
        departmentName : "Tech", 
        employeeType : "Intern",
        country : "canada",
        emailId : "drv@gmail.com",
        phoneNo : 3434343434
    }, {
        id: 1,
        fullName : "dhruv sharma",
        departmentName : "Tech", 
        employeeType : "Intern",
        country : "canada",
        emailId : "drv@gmail.com",
        phoneNo : 3434343434
    }, {
        id: 1,
        fullName : "dhruv sharma",
        departmentName : "Tech", 
        employeeType : "Intern",
        country : "canada",
        emailId : "drv@gmail.com",
        phoneNo : 3434343434
    }, {
        id: 1,
        fullName : "dhruv sharma",
        departmentName : "Tech", 
        employeeType : "Intern",
        country : "canada",
        emailId : "drv@gmail.com",
        phoneNo : 3434343434
    }, {
        id: 1,
        fullName : "dhruv sharma",
        departmentName : "Tech", 
        employeeType : "Intern",
        country : "canada",
        emailId : "drv@gmail.com",
        phoneNo : 3434343434
    }, {
        id: 1,
        fullName : "dhruv sharma",
        departmentName : "Tech", 
        employeeType : "Intern",
        country : "canada",
        emailId : "drv@gmail.com",
        phoneNo : 3434343434
    }*/],
    // initialState: null,
    reducers: {
        addEmployee: (state, action) => {
            return [...action.payload];
        }
    }
})

export const { addEmployee } = EmpSlice.actions;
export default EmpSlice.reducer; 