import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import Header from './pages/header/Header'
import AddingCard from './pages/ading/AddingCard'
import ManagementTable from './pages/Management-table/ManagementTable.component'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


function App() {

    const [list, setList] = useState([{
        id: 1,
        date: '3-1-1991',
        time: '13:23',
        userName: 'david',
        description: 'blablabla',
        radarNumber: '14'
    }])

    const addEvent = (description, radarNumber, ReportersName, date, time) => {
        if (description === '') {
            alert('description')
            return
        }
        if (radarNumber === '') {
            alert('pls choose radar number')
            return
        }
        if (ReportersName === '') {
            alert(`pls choose reporter's name`)
        }
        if (date === '' || time === '') {
            alert(`pls choose date and time`)
        }

        setList([...list, {
            id: 2,
            date: date,
            time: time,
            userName: ReportersName,
            description: description,
            radarNumber: radarNumber
        }])
        alert('הדיווח נקלט ')
    }



    const [isLogedIn, setIsLogIn] = useState(false);

    const chanegToTrue = () => {
        setIsLogIn(false)
    }

    const [correctEmail, setCorrectEmail] = useState('')
    const [cerrectPassword, setCorrectPassword] = useState('')

    const handleCorrect = (email, password) => {
        if (email === '' || email === !'davidabu91@gmail.com' || password === !'0000' || password === '') {
            setCorrectEmail('dis-cerrect-answer')
            alert('The password or email is incorrect')
        } else if (email === 'davidabu91@gmail.com' && password === '0000') {
            setIsLogIn(true)
        }
    }



    return ( <
            div className = "App" >
            <
            Header / >
            <
            Switch >
            <
            Route exact path = "/addingcard"
            component = {
                () => {
                    return <AddingCard addEvent = { addEvent }
                    /> }} / >
                    <
                    Route exact path = '/ManagementTable'
                    component = {
                        () => {
                            return <ManagementTable
                            handleClick = { handleCorrect }
                            chanegToTrue = { chanegToTrue }
                            isLogedIn = { isLogedIn }
                            correctEmail = { correctEmail }
                            cerrectPassword = { cerrectPassword }
                            List = { list }
                            />
                        }
                    }
                    /> < /
                    Switch > <
                        /div>
                );
            }

            export default App;