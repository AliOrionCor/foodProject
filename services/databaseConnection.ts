
import mongoose from 'mongoose';
import { MONGO_URL } from '../config/config';


export default async () => {
    try {
        mongoose.connect(MONGO_URL, {
        })
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Connection error:', error);
    }
}





