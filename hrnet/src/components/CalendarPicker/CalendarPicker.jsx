import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarPicker.css";

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