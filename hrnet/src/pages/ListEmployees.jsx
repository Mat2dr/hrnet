import React, { useEffect, useState } from 'react'
import SubNavBar from '../components/SubNavBar/SubNavBar'
import EMPLOYEES_DATA from '../Data/mockEmployees'
import TableData from '../components/TableData/TableData'
import { useSelector } from 'react-redux'

const ListEmployees = () => {
  const employees = useSelector((state) => state.employees);
  console.log(employees);

  const [data, setData] = useState([])

  useEffect(() => {
    setData(employees)
  }, [])
  

  async function fetchTableData() {
    setData(employees)
  }

  return (
    <div id='ListEmployees'>
        <SubNavBar/>
        <div className='content'>
            <div className='container'>
                <h3>View current employees</h3>
                <TableData data={data} />
            </div>
        </div>
    </div>
  )
}

export default ListEmployees