import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employees",
    initialState: [
        {"id":2,"FirstName":"Rona","LastName":"Mapholm","DateOfBirth":"11/21/2022","StartDate":"6/27/2022","Street":"Montana","City":"Orlando","State":"Florida","ZipCode":"32859","Department":"Marketing"},
        {"id":3,"FirstName":"Markus","LastName":"Mapholm","DateOfBirth":"11/21/2022","StartDate":"6/27/2022","Street":"Montana","City":"Orlando","State":"Florida","ZipCode":"32859","Department":"Marketing"},
        {"id":4,"FirstName":"Jonas","LastName":"Mapholm","DateOfBirth":"11/21/2022","StartDate":"6/27/2022","Street":"Montana","City":"Orlando","State":"Florida","ZipCode":"32859","Department":"Marketing"},
    ],
    reducers: {
        addEmployee: (state, action) => {
            const newEmployee = {
                id: Date(),
                FirstName: action.payload.FirstName,
                LastName: action.payload.LastName,
                DateOfBirth: action.payload.DateOfBirth,
                StartDate: action.payload.StartDate,
                Street: action.payload.Street,
                City: action.payload.City,
                State: action.payload.State,
                ZipCode: action.payload.State,
                Department: action.payload.Department,
            };
            state.push(newEmployee)
        }
    }
})

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;