import React, { useEffect, useState } from 'react'
import SubNavBar from '../components/SubNavBar/SubNavBar'
import EMPLOYEES_DATA from '../Data/mockEmployees'
import TableData from '../components/TableData/TableData'

const ListEmployees = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)


  useEffect(() => {
    setData(EMPLOYEES_DATA.EMPLOYEES_DATA)
    setLoading(false)
  }, [])
  

  async function fetchTableData() {

    setLoading(true)
    console.log(EMPLOYEES_DATA);
    setData(EMPLOYEES_DATA)
    console.log(data);
    setLoading(false)
  }

  return (
    <div id='ListEmployees'>
        <SubNavBar/>
        <div className='content'>
            <div className='container'>
                <h3>View current employees</h3>
                <p>Show 10 entries</p>
                <TableData/>
            </div>
        </div>
    </div>
  )
}

export default ListEmployees