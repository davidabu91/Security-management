import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({children,handleClick}) => (
    <button className='custom-button' onClick={handleClick} >
        {children}
    </button>
)

export default CustomButton;

