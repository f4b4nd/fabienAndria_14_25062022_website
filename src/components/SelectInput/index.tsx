import { Container } from "./style"

const SelectInput = ({inputName, options, setFunction}: ISelectInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <select 
                id={inputName}
                required
                onChange={(e) => {setFunction(e.target.value); console.log('s', e.target.value)}}
            >

                {options.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                ))}

            </select>

        </Container>
    )

}

export default SelectInput