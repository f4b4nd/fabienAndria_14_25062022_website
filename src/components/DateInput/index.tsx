import { Container, Input } from "./style"

const DateInput = ({inputName, setFunction}: IDateInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <Input 
                type="date" id={inputName}
                required
                onChange={(e) => setFunction(e.target.value)}
            />

        </Container>
    )

}

export default DateInput