import React, {useMemo} from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
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
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
      } = useTable({
        columns,
        data
      },
       useGlobalFilter, useSortBy, usePagination)

       const { globalFilter, pageIndex, pageSize } = state;

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
                {page.map(row => {
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
        <div>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {
                    [10,25,50,100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))
                }
            </select>
            <span>
                Page{' '}
                <strong>
                    { pageIndex + 1} of {pageOptions.length} 
                </strong>
            </span>
            <span>
                | Go to page: {' '}
                <input type='number' defaultValue={pageIndex + 1} 
                onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }}
                style={{width: '50px'}} />
            </span>
            <button onClick={ ()=> gotoPage(0) } disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={ ()=> previousPage() } disabled={!canPreviousPage}>Previous</button>
            <button onClick={ ()=> nextPage() } disabled={!canNextPage}>Next</button>
            <button onClick={ ()=> gotoPage(pageCount - 1) } disabled={!canNextPage}>{'>>'}</button>
        </div>
    </div>
    
  )
}

export default TableData