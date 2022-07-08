import { useState, useContext } from "react"
import { EmployeeContext } from '../../EmployeeContext'

import { Container, Button } from "./style"

import TextInput from "../TextInput"
import DateInput from "../DateInput"
import SelectInput from "../SelectInput"
import NumericInput from "../NumericInput"
import Fieldset from "../Fieldset"

import Modal from "../Modal"

import { DepartmentSelectOptions, stateSelectOptions } from '../../fixtures/selectOptions'

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

    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)

    const { dispatch } = useContext(EmployeeContext)

    const handleSubmit = (e: React.FormEvent) => {
        
        e.preventDefault()

        const addEmployeeAction: Action = {
            type: 'ADD_EMPLOYEE',
            payload: {
                "First Name" : firstName,
                "Last Name" : lastName,
                "Date of Birth": dateOfBirth,
                "Start Date" : startDate,
                "Street" : street,
                "City" : city,
                "State" : state,
                "Zip Code" : zipCode,
                "Department": department,
            }
        }

        dispatch(addEmployeeAction)
    
        setModalIsVisible(true)

        resetForm(e.target as HTMLFormElement)

    }

    const resetForm = (eventTarget: HTMLFormElement) => {
        eventTarget.reset()
    }

    return (
        <>
            <Modal isVisible={modalIsVisible} setIsVisible={setModalIsVisible} />

            <Container onSubmit={handleSubmit}>

                <TextInput inputName="First Name" setFunction={setFirstName} />
                
                <TextInput inputName="Last Name" setFunction={setLastName}/>
                
                <DateInput inputName="Date Of Birth" setFunction={setDateOfBirth} />
                
                <DateInput inputName="Start Date" setFunction={setStartDate} />
                
                <Fieldset legendName="Address">

                    <TextInput inputName="Street" setFunction={setStreet} />

                    <TextInput inputName="City" setFunction={setCity} />

                    <SelectInput 
                        inputName="State" 
                        options={stateSelectOptions} 
                        setFunction={setState} 
                    />

                    <NumericInput inputName="Zip Code" setFunction={setZipCode} />

                </Fieldset>

                <SelectInput 
                    inputName="Department" 
                    options={DepartmentSelectOptions} 
                    setFunction={setDepartment} 
                />

                <Button type="submit">Save</Button>

            </Container>
        </>
    )
}

export default NewEmployeeForm