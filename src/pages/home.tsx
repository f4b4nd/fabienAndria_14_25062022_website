import Form from "../components/form"
import { Link } from "react-router-dom"

const HomePage: React.FC = () => {
    return (
        <main className="homepage"> 
        
            <h1> HRnet </h1>

            <Link to="employees"> View current Employees </Link>

            <h2>Create Employee</h2>
             
            <Form />
        </main>
    )
}

export default HomePage