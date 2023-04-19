import express from 'express'
import dotenv from  'dotenv'
import colors from 'colors'
import logger from './middlewear/logger.js'
import errorHandler from './middlewear/error.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRouter.js'

dotenv.config()

connectDB()

const app = express()

// Middlewear
app.use(logger)

app.get('/',(req,res)=>{
    res.send('api is running')
})

app.use('/api/products', productRoutes)

// error handling
app.use(errorHandler)

const PORT =  process.env.PORT || 5000

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on ${PORT} port`.yellow.bold )); 