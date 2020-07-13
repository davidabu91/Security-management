import React, { useState } from 'react';

import SignIn from '../../components/sing-in/SignIn.component'

import Table from '../../components/table/Table.component'


import './ManagementTable.styles.scss'


export default function ManagementTable({isLogedIn, handleClick,
    chanegToTrue,correctEmail,cerrectPassword,List}) {



//    const render = () => {
//         if (isLogedIn === false) {
//             return (
//                 <div>
//                     <h1>ManagementTable</h1>
//                     <SignIn 
//                     handleClick={handleClick}
//                     correctEmail={correctEmail}
//                     cerrectPassword={cerrectPassword}/>
//                 </div>
//             )
//         }
//         else{
//             return(
//                 <div>
//                     <h2>LOG IN</h2>
//                     <button onClick={chanegToTrue}>click</button>
//                 </div>
//             )
//         }
//     }
 

    return (

        <div>
            <h1>Management Table</h1>
            <Table List={List}/>
        </div>
    )
}
