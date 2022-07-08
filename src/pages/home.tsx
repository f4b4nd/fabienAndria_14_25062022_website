import Form from "../components/form"
import { Link } from "react-router-dom"

const HomePage: React.FC = () => {
    return (
        <main className="home"> 
        
            <h1> HRnet </h1>
            
            <div className="center">
                <Link to="employees"> View current Employees </Link>
            </div>

            <h2>Create Employee</h2>
             
            <Form />
        </main>
    )
}

export default HomePage