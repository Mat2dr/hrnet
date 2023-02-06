import React from 'react'

export const GlobalFilter = ( { filter, setFilter } ) => {
  return (
    <div>
        <span>
            <input placeholder='Search' value={filter || ''} onChange={e => setFilter(e.target.value)} />
        </span>
    </div>
  )
}
