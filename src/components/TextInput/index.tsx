import { Container } from "./style"

const TextInput = ({inputName}: ITextInput) => {

    return (
        <Container>

            <label htmlFor={inputName}>{inputName}</label>

            <input 
                type="text" id={inputName}
                onChange={(e) => console.log(e.target.value)}
            />

        </Container>
    )

}

export default TextInput