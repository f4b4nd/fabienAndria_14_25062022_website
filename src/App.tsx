import React from 'react'

import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/home'

import EmployeesPage from './pages/employees'


function App () {

    return (
        
        <Router>
            
            <Routes>

                <Route path="/" element={ <HomePage /> }/>

                <Route path="employees" element={ <EmployeesPage /> }/>

            </Routes>

        </Router>
        
    )
}

export default App
