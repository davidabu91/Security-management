import React from 'react';

import {Link} from 'react-router-dom';

import './manu.styles.scss';

export default function Menu(props) {
   return (
   <div className='item'>
       <Link to={props.item.url}>
        <span><strong>{props.item.title}</strong></span>
        </Link>
    </div>
    )
}