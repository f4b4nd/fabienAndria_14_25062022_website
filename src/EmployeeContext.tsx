import { createContext, useReducer } from "react"

export const EmployeeContext = createContext<IEmployeeContext>({
    state: [],
    dispatch: {}
})

function employeeReducer (state: IEmployee[], action: Action) {

    switch (action.type) {

        case 'ADD_EMPLOYEE':
            return [...state, action.payload]

        default: 
            return state
    
    }
}


export const EmployeeProvider = ({children}: IEmployeeProvider) => {

    const initialState: IEmployee[] = [
        {
            "First Name" : "",
            "Last Name" : "",
            "Date of Birth": "",
            "Start Date" : "",
            "Street" : "",
            "City" : "",
            "State" : "",
            "Zip Code" : "",
            "Department": "",
        }
    ]

    const [state, dispatch] = useReducer(employeeReducer, initialState)

    return (
        <EmployeeContext.Provider value={{state, dispatch}}>
            {children}
        </EmployeeContext.Provider>
    )

}