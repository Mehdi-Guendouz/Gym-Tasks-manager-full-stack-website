const express= require('express') 
const {createWorkout, getWorkout, getWorkouts, deletworkout, updateworkout} = require('../controllers/workoutContreoller.js') 


const router = express.Router()


// get all workouts
router.get('/', getWorkouts)


//get a single workout
router.get('/:id',getWorkout)


//post a workout
router.post('/', createWorkout)

router.delete('/:id', deletworkout)

router.patch('/:id', updateworkout)

module.exports = router