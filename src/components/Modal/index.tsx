import { Container, Inner, CloseButton, Text, BlackBackgroundPage } from "./style"

const Modal = ({isVisible, setIsVisible}: IModal) => {

    return (
        <>
        <BlackBackgroundPage isVisible={isVisible} />
        
        <Container isVisible={isVisible} >
        
            <Inner>

                <CloseButton 
                    onClick={() => setIsVisible(false)}
                >
                    X
                </CloseButton>

                <Text> Employee Created </Text>

            </Inner>

        </Container>
        </>
    )

}

export default Modal