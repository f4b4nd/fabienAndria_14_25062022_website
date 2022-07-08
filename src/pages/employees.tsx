import { useContext } from 'react'
import { EmployeeContext } from '../EmployeeContext'

import { TableWrapper } from 'f4b4nd-table-plugin'

import { Link } from 'react-router-dom'


const EmployeesPage: React.FC = () => {

    const { state } = useContext(EmployeeContext)

    return (
        <main className="employees"> 

            <h1> Employees </h1> 

            <TableWrapper initialData={state} />
            
            <div className="center">
                <Link to="/">Home</Link>
            </div>

        </main>
    )
}

export default EmployeesPage