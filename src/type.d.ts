
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

interface IModal {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

interface IEmployee {
    "First Name": string,
    "Last Name": string,
    "Date of Birth": string,
    "Start Date" : string,
    "Street" : string,
    "City" : string,
    "State" : string,
    "Zip Code" : string,
    "Department": string,
}

interface IEmployeeContext {
    state: IEmployee[],
    dispatch: React.dispatch<Action>
}

type Action = {
    type: 'ADD_EMPLOYEE',
    payload: IEmployee
}

interface IEmployeeProvider {
    children?: React.ReactNode
}