import { Container } from "./style"

import DateInput from "../DateInput"

import TextInput from "../TextInput"
import Fieldset from "../Fieldset"
import SelectInput from "../SelectInput"
import NumericInput from "../NumericInput"

const Form = () => {
    return (
        <Container>
            <TextInput inputName="FirstName" />
            
            <TextInput inputName="LastName" />
            
            <DateInput inputName="DateOfBirth" />
            
            <DateInput inputName="StartDate" />
            
            <Fieldset legendName="Adress">

                <TextInput inputName="Street" />

                <TextInput inputName="City" />

                <SelectInput inputName="State" options={['A', 'B']}/>

                <NumericInput inputName="ZipCode" />

            </Fieldset>

            <SelectInput inputName="Department" options={['C', 'D']}/>

        </Container>
    )
}

export default Form