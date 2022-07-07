import { Container } from "./style"

const NumericInput = ({inputName, setFunction}: INumericInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <input 
                type="number" inputMode="numeric" id={inputName}
                required
                onChange={(e) => setFunction(e.target.value)}
            />

        </Container>
    )

}

export default NumericInput