import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { EmployeeProvider } from './EmployeeContext'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <EmployeeProvider>
            <App />
        </EmployeeProvider>
    </React.StrictMode>
)