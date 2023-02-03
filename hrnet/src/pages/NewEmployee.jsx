import React, { useState } from 'react'
import CalendarPicker from '../components/CalendarPicker/CalendarPicker';
import SubNavBar from '../components/SubNavBar/SubNavBar'

const NewEmployee = () => {

    let employees = [];

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        DateOfBirth: '',
        StartDate: '',
        Street: '',
        City: '',
        State: '',
        ZipCode: '',
        Department: '',
    });

    const submitHandler = async (e) => {
        e.preventDefault();






        console.log("Submited !");
        console.log(employees);
        employees.push(employee)
        console.log("Employee is push in the array !");
        console.log(employees);

        console.log(employee)
    };

    return (
        <div id='NewEmployee'>
            <SubNavBar />
            <div className='content'>
                <div className='container'>
                    <h3>Create Employee</h3>
                    <p>Please enter the new employee informations.</p>
                    <form onSubmit={submitHandler}>
                        <div>
                            <div className='double-inputs'>
                                <label>
                                    First Name:
                                    <input type="text" name="firstName" value={employee.firstName} onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })} required />
                                </label>
                                <label>
                                    Last Name:
                                    <input type="text" name="LastName" value={employee.lastName} onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })} required />
                                </label>
                            </div>

                            <label>Date of birth:
                                <CalendarPicker value={employee.DateOfBirth} setInputDate={(e) => setEmployee({ ...employee, DateOfBirth: e })} /></label>
                        </div>
                        <div className='divider'></div>
                        <label>Start Date:
                            <CalendarPicker value={employee.StartDate} setInputDate={(e) => setEmployee({ ...employee, StartDate: e })} /></label>
                        <div className='divider'></div>
                        <label>
                            Street:
                            <input type="text" name="Street" value={employee.Street} onChange={(e) => setEmployee({ ...employee, Street: e.target.value })} required />
                        </label>
                        <label>
                            City:
                            <input type="text" name="City" value={employee.City} onChange={(e) => setEmployee({ ...employee, City: e.target.value })} required />
                        </label>
                        <label>
                            State
                            <select name="state" id="State" value={employee.State} onChange={(e) => setEmployee({ ...employee, State: e.target.value })} required>
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>American Samoa</option>
                                <option>Arizona</option>
                                <option>Arkansas</option>
                            </select>
                        </label>
                        <label>
                            Zip Code:
                            <input type="text" name="Zip Code" value={employee.ZipCode} onChange={(e) => setEmployee({ ...employee, ZipCode: e.target.value })} required />
                        </label>
                        <div className='divider'></div>
                        <label>
                            Departement
                            <select name="department" id="department" value={employee.Department} onChange={(e) => setEmployee({ ...employee, Department: e.target.value })} required>
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
                        </label>

                        <input className='submit-btn' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewEmployee