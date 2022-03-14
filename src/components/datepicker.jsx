import React, { useState, forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "./datepicker.css";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ date, setDate }) => {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="datepicker-style" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      dateFormat="yyyy.MM.dd"
      locale={ko}
      minDate={new Date()}
      showPopperArrow={false}
      customInput={<ExampleCustomInput />}
    />
  );
};

export { MyDatePicker };
