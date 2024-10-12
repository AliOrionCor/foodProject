import mongoose, { Schema, Document, model } from 'mongoose';

interface vandorDoc extends Document {
    name: string,
    ownerName: string,
    foodType: [string],
    pinCode: string,
    address: string,
    phone: string,
    email: string,
    password: string,
    salt: string,
    serviceAvailable: boolean,
    coverImage: [string],
    rating: number,
    foods: any 
}

const vandorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    foodType: {
        type: [String],
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    serviceAvailable: {
        type: Boolean,
        required: true
    },
    coverImage: {
        type: [String],
        required: true
    },
    rating: {
        type: Number
    },
    foods:
         [{
             type: mongoose.SchemaTypes.ObjectId,
             ref: 'food'
 
         }]
},
    {
        toJSON: {
            // transform  the returned data
            transform(doc, ret) {
                delete ret.password,
                    delete ret.salt,
                    delete ret.__v,
                    delete ret.createdAt,
                    delete ret.updatedAt
            }
        },
        timestamps: true
    })


const Vandor = mongoose.model<vandorDoc>('vandor', vandorSchema)


export { Vandor }