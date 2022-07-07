import styled from "styled-components"

interface Props {
    isVisible?: boolean
}

export const Container = styled.div<Props>`
    
    ${({isVisible}) => !isVisible && 'visibility: hidden;'}

    border-radius: 5px;
    background-color: white ;

    position: absolute;

    top: 40%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    height: 100px;
    width: 300px;
    z-index: 2;
    
`
export const BlackBackgroundPage = styled.div<Props>`
    ${({isVisible}) => !isVisible && 'visibility: hidden;'}
    z-index: 1;

    position: fixed;
    top:0;
    left: 0;
    height: 100vh;
    width: 100vw;

    opacity: 0.7;
    background-color: black;

`

export const Inner = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center ;
    align-items: center;
`

export const Text = styled.p`
    margin: 0;
`
export const CloseButton = styled.button`
    position: absolute;
    top: -10px;
    right: -10px;

    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;

    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    background-color: black;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`
