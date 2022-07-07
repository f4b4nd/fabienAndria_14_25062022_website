import { TableWrapper } from 'f4b4nd-table-plugin'

import { Link } from 'react-router-dom'

import JSONData from "../fixtures/employees.json"


const EmployeesPage: React.FC = () => {

    const initialData = JSONData.slice(0, 150)

    return (
        <main className="Employees"> 

            Employees 

            <TableWrapper initialData={initialData} />
            
            <Link to="/">Home</Link>
        </main>
    )
}

export default EmployeesPage