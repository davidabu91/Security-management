import React, { useState } from 'react'

import './Table.styles.scss';



export default function Table(props) {

    return (
        <div>
            <h1>Manager</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>TIME</th>
                        <th>REPORTER'S NAME</th>
                        <th>DESCRIPTION</th>
                        <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    {props.List.map(emp => {
                        return (
                            <tr key={emp.id}>
                                <td>{emp.date}</td>
                                <td>{emp.time}</td>
                                <td>{emp.userName}</td>
                                <td>{emp.description}</td>
                                <td>{emp.radarNumber}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
