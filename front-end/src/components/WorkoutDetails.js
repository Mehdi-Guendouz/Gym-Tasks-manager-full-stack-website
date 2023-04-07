import { useWorkoutContext } from '../hooks/useWorkoutsContext'

export default function WorkoutDetails({workouts}){
    const {dispatch} = useWorkoutContext()

    const handelClick = async () => {
        const response = await fetch('/api/workouts/' + workouts._id, {
            method: 'DELETE',
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT' , payload : json})
        }
    }
    return (
        <div className="workouts-details">
            <h4>{workouts.title}</h4>
            <p><strong>Load (kg): </strong>{workouts.load} </p>
            <p><strong>Reps: </strong>{workouts.reps} </p>
            <p>{workouts.createdAt}</p>
            <span onClick={handelClick}>delete</span>
        </div>
    )
    
}