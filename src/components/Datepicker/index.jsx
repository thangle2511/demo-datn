import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerComponent = (props) => {
  const { setDatePicker } = props;
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(datePicker) => {
        setStartDate(datePicker);
        setDatePicker(datePicker);
      }}
    />
  );
};

export default DatePickerComponent;
