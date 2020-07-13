import React from 'react';


import './select.styles.scss'



export default function MySelect(props) {

  const title = props.title
  const items = props.List

  return (
    <div className='group'>
      <select className='form-select' id="to" onChange={props.handleChange}>
  <option className='form-select-label' selected disabled hidden>{title}</option>
          {items.map(item =>{
            return(
            <option >{item}</option>
            )
          })}
        </select>
    </div>
  )
}
