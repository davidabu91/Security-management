import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import MyButton from '../../components/my-button/MyButton.component'

import FormInput from '../../components/form-input/FormInput.component';

import MySelect from '../../components/select/Select.component';

import DateAndTime from '../../components/date-and-time-select/dateAndTime.component';

import './adding.styels.scss'



export default function AddingCard(props) {

  const [radarNumber, setRadarNumber] = useState();
  const [description, setDescription] = React.useState(
    localStorage.getItem('description') || ''
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [ReportersName, setReportersName] = useState('');


  const Radars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 16, 17, 18, 19, 20]

  const SecurityGuards = [
    'Olive',
    'אורה',
    'הלל',
    'משה',
    'תמיר',
    'עומר',
    'בתאל',
    'דוד'
  ]


  React.useEffect(()=>{
    localStorage.setItem('description', description);
  },[description])

  const handleChange = (event) => {
    // localStorage.setItem('myValueInLocalStorage', event.target.value);

    setRadarNumber(event.target.value);
  };

  const disHandleChange = (event) => {
    setDescription(event.target.value);
  };

  const nameHandleCgange = e => {
    setReportersName(e.target.value)
  }

  const dateHandleChange = e => {
    setDate(e.target.value)
  }

  const timeHandleChange = e => {
    setTime(e.target.value)
  }

  const sendProperty = () => {
    props.addEvent(description, radarNumber, date, ReportersName, time)
  }



  return (
    <div className='add'>
      <div>
        <MySelect
          handleChange={nameHandleCgange}
          List={SecurityGuards}
          title={'מי מדווח'}
        />
        <MySelect
          handleChange={handleChange}
          List={Radars}
          title={'Choose Radar Number'}
        />
      </div>

      <DateAndTime
        dateHandleChange={dateHandleChange}
        timeHandleChange={timeHandleChange}
      />


      <FormInput
        name='description'
        type='textarea'
        value={description}
        handleChange={disHandleChange}
        label={'description'}
      />





      {/* <DatePicker
        selected={startDate}
        onChange={props.dateCgange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      /> */}
      <MyButton
        text={'ADD'}
        radarNumber={radarNumber}
        description={description}
        sendProperty={sendProperty}
      />
      <div>
        <Link to='/'>
          <MyButton text={'HOME'} />
        </Link>
      </div>
    </div>
  )
}
