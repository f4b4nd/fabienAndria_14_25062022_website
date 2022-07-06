import { Container } from "./style"

const SelectInput = ({inputName, options}: ISelectInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <select 
                id={inputName}
                onChange={(e) => console.log(e.target.value)}
            >

                {options.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                ))}

            </select>

        </Container>
    )

}

export default SelectInput