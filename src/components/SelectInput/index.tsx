import { useEffect } from "react"
import { Container, Select } from "./style"

const SelectInput = ({inputName, options, setFunction}: ISelectInput) => {

    useEffect(() => {
        options.length > 0 && setFunction(options[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <Select 
                id={inputName}
                required
                
                onChange={(e) => setFunction(e.target.value)}
            >

                {options.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                ))}

            </Select>

        </Container>
    )

}

export default SelectInput