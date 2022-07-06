import { Container } from "./style"

const DateInput = ({inputName}: IDateInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <input 
                type="date" id={inputName}
                onChange={(e) => console.log(e.target.value)}
            />

        </Container>
    )

}

export default DateInput