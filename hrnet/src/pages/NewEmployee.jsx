import React from 'react'
import SubNavBar from '../components/SubNavBar/SubNavBar'

const NewEmployee = () => {
  return (
    <div id='NewEmployee'>
        <SubNavBar/>
        <div className='content'>
            <div className='container'>
                <h3>Create Employee</h3>
                <p>Please enter the new employee informations.</p>
                <form>
                    <div>
                        <div className='double-inputs'>
                            <label>
                                First Name:
                                <input type="text" name="firstName" />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" name="LastName" />
                            </label>
                        </div>
                        
                        <label>
                            Date of birth:
                            <input type="text" name="DateOfBirth" />
                        </label>
                    </div>

                    <label>
                        Start Date:
                        <input type="text" name="StartDate" />
                    </label>

                    <label>
                        Street:
                        <input type="text" name="Street" />
                    </label>
                    <label>
                        City:
                        <input type="text" name="City" />
                    </label>
                    <label>
                        Zip Code:
                        <input type="text" name="Zip Code" />
                    </label>
                    <input className='submit-btn' type="submit" value="Add" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewEmployee