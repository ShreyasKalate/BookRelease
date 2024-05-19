import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRoute from './routes/bookRoute.js'
import userRoute from './routes/userRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()
const PORT = process.env.PORT || 4000
const URI=process.env.mongoDBURI

//connect to mongoDB
try {
    mongoose.connect(URI)
    console.log("connected to mongoDB");
} catch (error) {
    console.log("error")
}

//defining book Routes
app.use('/book',bookRoute)
app.use('/user',userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
