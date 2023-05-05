import express from 'express'
import dotenv from  'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middlewear/errorMiddlewear.js'
import logger from './middlewear/logger.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

// Middlewear
app.use(logger)

app.get('/',(req,res)=>{
    res.send('api is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

// error handling
app.use(notFound)
app.use(errorHandler)

const PORT =  process.env.PORT || 5000

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on ${PORT} port`.yellow.bold )); 