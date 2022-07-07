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

export const EmployeeProvider = ({initialState = [], children}: IEmployeeProvider) => {

    const [state, dispatch] = useReducer(employeeReducer, initialState)

    return (
        <EmployeeContext.Provider value={{state, dispatch}}>
            {children}
        </EmployeeContext.Provider>
    )

}