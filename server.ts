import express from 'express';
const app = express();
import {adminRoute, vandorRoute } from './routes'
import mongoose from 'mongoose';
import { MONGO_URI } from './config/config';
app.use(express.json());


app.use('/admin', adminRoute)
app.use('/vandor', vandorRoute)




app.use('/', async (req, res) => {
    try {
        res.status(201).json({
            message: 'Food order App is running',
        });
    } catch (error) {
        res.status(201).json({
            message: error
        });
    }
});


mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });

 

app.listen(4000, () => {
    console.log('App is listnening to the port 4000')
});


