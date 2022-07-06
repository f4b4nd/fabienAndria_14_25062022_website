interface ITextInput {
    inputName: string
}

interface INumericInput {
    inputName: string
}

interface IDateInput {
    inputName: string
}

interface ISelectInput {
    inputName: string,
    options: string[]
}

interface IFieldset {
    legendName: string,
    children?: React.ReactNode
}