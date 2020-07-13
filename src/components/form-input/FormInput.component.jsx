import React from 'react'

import './formInput.styles.scss'

export default function FormInput({ handleChange, label,...otherProps}) {
    return (
        <div className='group'>
            <input 
            className='form-input' 
            onChange={handleChange}
            {...otherProps}/>
            {
                label ? 
               ( <label 
               className={`${
                   otherProps.value ? 'shrink' : ''
                   } form-input-label`}>
                     {label}
                </label>)
                : null
            }
        </div> 
    )
}
