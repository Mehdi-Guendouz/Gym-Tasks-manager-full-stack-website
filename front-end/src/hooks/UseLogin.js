import {useState} from 'react';
import {UseAuthContexte} from './UseAuthContexte';

export const Uselogin = () =>{
    const { dispatch } = UseAuthContexte()
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null);

    const login = async (email, password) =>{
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/login' ,{
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(response.error)
        }

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})

            // update loading state
            setIsLoading(false)
        }
    }
    return {setError, setIsLoading , login}
}
