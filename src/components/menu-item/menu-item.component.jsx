import React from 'react';

import './menu-item.styles.scss';

import Item from '../menu/menu.component';

export default function MenuItem(props) {
    return (
        <div className='menu-item'>
            {props.list.map(item => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}