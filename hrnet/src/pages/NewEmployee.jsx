import React, { useState } from 'react'
import CalendarPicker from '../components/CalendarPicker/CalendarPicker';
import SubNavBar from '../components/SubNavBar/SubNavBar'
import STATES_DATA from '../Data/state';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import { Modal } from 'dragovic-modal-package';

/**
 * @name NewEmployee
 * @description A component for the page to add an employee
 * @return {JSX.Element}
 */
const NewEmployee = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [employee, setEmployee] = useState({
        FirstName: '',
        LastName: '',
        DateOfBirth: '',
        StartDate: '',
        Street: '',
        City: '',
        State: '',
        ZipCode: '',
        Department: '',
    });


    const submitHandler = (e) => {
        e.preventDefault();

         dispatch(addEmployee({
            FirstName: employee.FirstName,
            LastName: employee.LastName,
            DateOfBirth: employee.DateOfBirth,
            StartDate: employee.StartDate,
            Street: employee.Street,
            City: employee.City,
            State: employee.State,
            ZipCode: employee.ZipCode,
            Department: employee.Department,
        })) 

        setEmployee({
            ...employee, FirstName: "" , LastName: "", DateOfBirth: "", Street: "", City: "", State: "", ZipCode: "", Department: ""
        })

        setShow(true)
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
                                    <input type="text" name="FirstName" onChange={(e) => setEmployee({ ...employee, FirstName: e.target.value })} value={employee.FirstName} required/>
                                </label>
                                <label>
                                    Last Name:
                                    <input type="text" name="LastName" value={employee.LastName} onChange={(e) => setEmployee({ ...employee, LastName: e.target.value })} required />
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
                                {
                                    STATES_DATA.map(states => (
                                        <option key={states.name} value={states.name}>
                                            {states.name}
                                        </option>
                                    ))
                                }
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
            <Modal title='Employee Created' onClose={ ()=> setShow(false) } show={ show } />
        </div>
    )
}

export default NewEmployee