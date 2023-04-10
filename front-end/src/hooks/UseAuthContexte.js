import { AuthContexte } from '../contexte/AuthContext'
import { useContext } from 'react'

export const UseAuthContexte = () => {
    const context = useContext(AuthContexte)    

    if(!context){
        throw Error('UseAuthContexte must be used inside an AuthContextProfider')
    }
    

    return context
}