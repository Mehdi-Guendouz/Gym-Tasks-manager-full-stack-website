import { UseAuthContexte } from "./UseAuthContexte"

export const useLogout = () =>{
    const {dispatch } = UseAuthContexte()
    const logout = () =>{
        localStorage.removeItem('User')
        dispatch({type : 'LOGOUT'})
    }

    return logout
}