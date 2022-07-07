
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

interface IEmployee {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    startDate: string,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    department: string,
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
    initialState?: IEmployee[],
    children?: React.ReactNode
}