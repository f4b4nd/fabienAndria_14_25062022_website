import { Container } from "./style"

const Fieldset = ({legendName, children}: IFieldset) => {

    return (
        <Container>
            
            <legend>{legendName}</legend>

            {children}

        </Container>
    )

}

export default Fieldset