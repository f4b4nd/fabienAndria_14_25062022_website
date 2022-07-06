import { Container } from "./style"

const NumericInput = ({inputName}: INumericInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <input 
                type="number" inputMode="numeric" id={inputName}
                onChange={(e) => console.log(e.target.value)}
            />

        </Container>
    )

}

export default NumericInput