import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const Calendar = ({ dateRange, setDateRange, startDate, endDate }) => {
  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      locale={ko}
      placeholderText="기간"
      onChange={(update) => {
        setDateRange(update);
      }}
    />
  );
};

export default Calendar;
