import { useContext } from 'react'
import { EmployeeContext } from '../EmployeeContext'

import { TableWrapper } from 'f4b4nd-table-plugin'

import { Link } from 'react-router-dom'


const EmployeesPage: React.FC = () => {

    const { state } = useContext(EmployeeContext)

    return (
        <main className="Employees"> 

            Employees 

            <TableWrapper initialData={state} />
            
            <Link to="/">Home</Link>
        </main>
    )
}

export default EmployeesPage