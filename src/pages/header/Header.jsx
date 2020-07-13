import React from 'react'

import MenuItem from '../../components/menu-item/menu-item.component'




const List = [
    {title:'MANAGEMENT TABLE', id:1, url:'ManagementTable'},
    {title:'HOME', id:2, url:'/'},
    {title:'EVENTS SCHEDULE', id:3, url:'addingcard'},
]



export default function Header() {


    return (
        <div>
            <MenuItem list={List}/>
        </div>
    )
}
