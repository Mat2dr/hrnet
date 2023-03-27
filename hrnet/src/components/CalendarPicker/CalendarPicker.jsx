import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarPicker.css";

/**
 * @name CalendarPicker
 * @description A component for the plugin date picker
 * @param {date} {setInputDate}
 * @return {JSX.Element}} 
 */
const CalendarPicker = ({ setInputDate }) => {
  const [displayedDate, setDisplayedDate] = useState(new Date())

  function handleChange(e) {
    setDisplayedDate(e)
    setInputDate(e?.toLocaleDateString("fr-FR"))
  }

  return (
    <div>
      <DatePicker selected={displayedDate && displayedDate} onChange={(e) => handleChange(e)} 
      dateFormat= "MM/dd/yyyy"
      isClearable
      clearButtonClassName="clear-button"
      maxDate={new Date()}
      required
    />
    </div>
  )
}

export default CalendarPicker