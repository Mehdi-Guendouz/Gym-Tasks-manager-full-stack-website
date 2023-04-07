import React, {useState} from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'

export default function WorkoutForm() {
    const {dispatch} = useWorkoutContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')

    const handelSubmit = async (e) =>{
        e.preventDefault()
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setReps('')
            setTitle('')
            setLoad('')
            setError(null)
            dispatch({type: 'CREATE_WORKOUT' , payload: json})
            console.log("new workout added successfully", json)
        }
    }

  return (
    <form className='create' onSubmit={handelSubmit}>
        <h3>Add a new Workout</h3>
        <label for="">Exersize Title:</label>
        <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} />
        <label for="">Load: (in Kg)</label>
        <input type="number"  value={load} onChange={(e) => setLoad(e.target.value)} />
        <label for="">Reps:</label>
        <input type="number"  value={reps} onChange={(e) => setReps(e.target.value)} />
        <button>Add workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}
