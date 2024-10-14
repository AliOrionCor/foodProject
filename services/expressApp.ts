import express, { Application } from 'express';
import { adminRoute, vandorRoute, shoppingRoute } from '../routes'
import morgan from 'morgan'
import path from 'path';


export default async (app: Application) => {
    try {
        app.use(express.json());
        app.use(morgan('dev'));
        app.use('/admin', adminRoute)
        app.use('/vandor', vandorRoute)
        app.use('/shopping', shoppingRoute);

        app.use('/images', express.static(path.join(__dirname, 'images')))


        // Defualt application route
        app.use('/', async (req, res) => {
            try {
                res.status(201).json({
                    message: 'Defualt APP route',
                });
            } catch (error) {
                res.status(201).json({
                    message: error.message
                });
            }
        });

        return app
    }
    catch (error) {
        return error.message

    }
}




