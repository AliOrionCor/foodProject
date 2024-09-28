import express from 'express';
const app = express();
/* import mongoose from 'mongoose';
import { MONGO_URI } from './models/config'; */
app.use(express.json());



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

/*
app.use('/submitForm', async (req, res) => {
    try {
        const contact = await ContactUs.create({
            contactFirstName: req.body.contactFirstName,
            contactLastName: req.body.contactLastName,
            contactEmail: req.body.contactEmail,
            contactCompany: req.body.contactCompany,
            contactHear: req.body.contactHear,
            contactMessage: req.body.contactMessage,
        });

        res.status(201).json({
            message: 'Contact created successfully',
            contact,
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

 */

app.listen(4000, () => {
    console.log('App is listnening to the port 4000')
});


