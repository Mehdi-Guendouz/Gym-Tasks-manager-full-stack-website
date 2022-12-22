const Workout = require('../models/workoutsModels.js')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}



// get single workout

const getWorkout = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such id"})
    }

    const workouts = await Workout.findById(id)
    if(!workouts){
        return res.status(404).json({error: 'no workout '})
    }
    res.status(200).json(workouts)
}


//create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workouts = await Workout.create({title, load, reps})
        res.status(200).json(workouts)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}


// delete a workout
const deletworkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such id"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    
    if(!workout){
        return res.status(404).json({error: 'no workout '})
    }
    res.status(200).json(workout)
}

//update a workout
const updateworkout = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such id"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'no workout '})
    }
    res.status(200).json(workout)
}




module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deletworkout,
    updateworkout
}




