require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose') 
const workoutRoutes =require('./routes/workouts')
const UserRoutes =require('./routes/user')


const app = express()


//connect to database


mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, ()=>{
            console.log('listing on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})



app.use('/api/workouts',workoutRoutes)
app.use('/api/user',UserRoutes)
