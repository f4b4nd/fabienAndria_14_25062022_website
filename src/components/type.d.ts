
interface ITextInput {
    inputName: string,
    setFunction: React.Dispatch<React.SetStateAction<string>>
}

interface INumericInput {
    inputName: string,
    setFunction: React.Dispatch<React.SetStateAction<string>>,
}

interface IDateInput {
    inputName: string,
    setFunction: React.Dispatch<React.SetStateAction<string>>,
}

interface ISelectInput {
    inputName: string,
    options: string[],
    setFunction: React.Dispatch<React.SetStateAction<string>>,
}

interface IFieldset {
    legendName: string,
    children?: React.ReactNode,
}