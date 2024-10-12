import mongoose, { Schema, Document } from "mongoose";




interface foodDoc extends Document {

    vandorId: string,
    name: string,
    description: string,
    category: string,
    foodType: string,
    readyTime: string,
    price: number,
    rating: number,
    images: [string]

}


const foodSchema = new Schema({
    vandorId: { type: String },
    name: { type: String, require: true },
    description: { type: String, require: true },
    category: { type: String, require: true },
    foodType: { type: String, require: true },
    readyTime: { type: String, require: true },
    price: { type: Number, require: true },
    rating: { type: Number },
    images: { type: [String] },

},
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.__v,
                    delete ret.createdAt,
                    delete ret.updatedAt
            }
        },
        timestamps: true

    })

const Food = mongoose.model<foodDoc>('food', foodSchema)

export { Food };