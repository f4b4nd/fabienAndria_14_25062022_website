import { Container } from "./style"

const DateInput = ({inputName, setFunction}: IDateInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <input 
                type="date" id={inputName}
                onChange={(e) => setFunction(e.target.value)}
            />

        </Container>
    )

}

export default DateInput