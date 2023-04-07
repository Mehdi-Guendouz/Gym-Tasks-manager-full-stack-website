import {createContext, useReducer} from 'react';

export const AuthContexte = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload}
    
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
}


export const AuthContexteProvide = ({children}) =>{

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    console.log('authContext state: ', state)

    return(
        <AuthContexte.Provider value={{...state, dispatch}}>
            {children}
        </AuthContexte.Provider>
    )
}