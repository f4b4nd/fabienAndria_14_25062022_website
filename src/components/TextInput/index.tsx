import { Container } from "./style"

const TextInput = ({inputName, setFunction}: ITextInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <input 
                type="text" id={inputName}
                onChange={(e) => setFunction(e.target.value)}
            />

        </Container>
    )

}

export default TextInput