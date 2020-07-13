import React,{useState} from 'react'


import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import './dateAndTime.styles.scss'

export default function DateAndTime({timeHandleChange,dateHandleChange}) {

    return (
        <div className='group'>
            <input className='form-date' type="date" onChange={dateHandleChange}/>
            <input className='form-date' type="time" onChange={timeHandleChange}/>
        </div>
    )
}

