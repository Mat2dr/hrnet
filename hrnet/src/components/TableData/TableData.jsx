import React, {useMemo} from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import EMPLOYEES_DATA from '../../Data/mockEmployees';
import COLUMNS from '../TableData/columns'
import { GlobalFilter } from './GlobalFilter';


const TableData = () => {


    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => EMPLOYEES_DATA.EMPLOYEES_DATA, [])

    console.log(data);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
      } = useTable({
        columns,
        data
      },
       useGlobalFilter, useSortBy)

       const { globalFilter } = state;

  return (
    <div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? 'v' : '^') : ''}
                                        </span>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr className='row' {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                     )
                })}
            </tbody>
        </table>
    </div>
    
  )
}

export default TableData