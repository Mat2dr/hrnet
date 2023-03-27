import React from 'react'

/**
 * @name GlobalFilter
 * @description A component to filter the TableData
 * @param {string} {filter}
 * @return {JSX.Element}} 
 */
export const GlobalFilter = ( { filter, setFilter } ) => {
  return (
    <div>
        <span>
            <input placeholder='Search' value={filter || ''} onChange={e => setFilter(e.target.value)} />
        </span>
    </div>
  )
}
