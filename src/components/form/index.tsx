import { useState } from "react"

import { Container, Button } from "./style"

import DateInput from "../DateInput"

import TextInput from "../TextInput"
import Fieldset from "../Fieldset"
import SelectInput from "../SelectInput"
import NumericInput from "../NumericInput"

const Form = () => {

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")

    const [street, setStreet] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [stateRegion, setStateRegion] = useState<string>("")
    const [zipCode, setZipCode] = useState<string>("")

    const [department, setDepartment] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        
        e.preventDefault()

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
                    setFunction={setStateRegion} 
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

export default Form