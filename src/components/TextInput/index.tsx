import { Container, Input } from "./style"

const TextInput = ({inputName, setFunction}: ITextInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <Input 
                type="text" id={inputName}
                required
                onChange={(e) => setFunction(e.target.value)}
            />

        </Container>
    )

}

export default TextInput