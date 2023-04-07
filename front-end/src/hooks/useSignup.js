import {useState} from 'react';
import {UseAuthContexte} from './UseAuthContexte';

export const useSignup = () =>{
    const [error, seterror] = useState(null)
    const [isLoading, setisLoading] = useState(null)
    const { dispatch } = UseAuthContexte()

    const signup = async (email, password) => {
        setisLoading(true)
        seterror(null)

        const response = await fetch('/api/user/signup',{
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
           
        })
        const json = await response.json()

        if(!response.ok){
            setisLoading(false)
            seterror(json.error)
        }

        if(response.ok){
            //save the user to local storage

            localStorage.setItem('user', JSON.stringify(json))

            //update the authcontext
            dispatch({type: 'LOGIN', payload: json})
            setisLoading(false)
        }
    }

    return {signup , isLoading , error}

} 