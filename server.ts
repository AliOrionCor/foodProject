import express from 'express';
const app = express();
import {adminRoute, vandorRoute } from './routes'
import mongoose from 'mongoose';
import morgan from 'morgan'
import { MONGO_URL } from './config/config';
app.use(express.json());
app.use(morgan('dev'));


app.use('/admin', adminRoute)
app.use('/vandor', vandorRoute)




app.use('/', async (req, res) => {
    try {
        res.status(201).json({
            message: 'Defualt APP route',
        });
    } catch (error) {
        res.status(201).json({
            message: error
        });
    }
});


mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });

 

app.listen(4000, () => {
    console.log('App is listnening to the port 4000')
});


