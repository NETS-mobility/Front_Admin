import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./customDatePicker.css";
import Calendar from "../assets/calendar.svg";

const dateToString = (date) => {
    return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')
}

const CustomDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selected, setSelected] = useState("");
    const ExampleCustomInput = ({ value, onClick }) => {        
        return(
                <button className="customDatePickerBox" onClick={onClick}>
                    <div className="customDateText">
                        {selected}
                    </div>
                    <img src={Calendar} alt="달력" className="customCalendar" />
                </button>
        );
    }

    useEffect(()=>{
        setSelected(dateToString(startDate));
    }, [startDate])
    
    return (
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                customInput={<ExampleCustomInput />}
            />
    );
}

export default CustomDatePicker;