import { useState, useContext } from "react"
import { EmployeeContext } from '../../EmployeeContext'

import { Container, Button } from "./style"

import TextInput from "../TextInput"
import DateInput from "../DateInput"
import SelectInput from "../SelectInput"
import NumericInput from "../NumericInput"
import Fieldset from "../Fieldset"

const NewEmployeeForm = () => {

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")

    const [street, setStreet] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [state, setState] = useState<string>("")
    const [zipCode, setZipCode] = useState<string>("")

    const [department, setDepartment] = useState<string>("")

    const { dispatch } = useContext(EmployeeContext)

    const handleSubmit = (e: React.FormEvent) => {
        
        e.preventDefault()

        const addEmployeeAction: Action = {
            type: 'ADD_EMPLOYEE',
            payload: {
                firstName,
                lastName,
                dateOfBirth,
                startDate,
                street,
                city,
                state,
                zipCode,
                department,
            }
        }

        dispatch(addEmployeeAction)
    
    }

    return (
        <Container>

            <TextInput inputName="FirstName" setFunction={setFirstName} />
            
            <TextInput inputName="LastName" setFunction={setLastName}/>
            
            <DateInput inputName="DateOfBirth" setFunction={setDateOfBirth} />
            
            <DateInput inputName="StartDate" setFunction={setStartDate} />
            
            <Fieldset legendName="Adress">

                <TextInput inputName="Street" setFunction={setStreet} />

                <TextInput inputName="City" setFunction={setCity} />

                <SelectInput 
                    inputName="State" 
                    options={['A', 'B']} 
                    setFunction={setState} 
                />

                <NumericInput inputName="ZipCode" setFunction={setZipCode} />

            </Fieldset>

            <SelectInput 
                inputName="Department" 
                options={['C', 'D']} 
                setFunction={setDepartment} 
            />

            <Button type="submit" onClick={(e) => handleSubmit(e)}>Save</Button>

        </Container>
    )
}

export default NewEmployeeForm