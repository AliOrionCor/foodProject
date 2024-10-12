import { createFoodInter, createVandorInput, updateProfileInter, vandorLoginInput } from "../dto";
import { Food } from "../models";
import { Vandor } from "../models/vandor";
import { generatePassword, generateSignature, validatePassword } from "../utlity";


export const vandorLogin = async (req, res) => {
    try {

        const { email, password } = <vandorLoginInput>req.body
        // Verify Eamil
        const existingVandor = await Vandor.findOne({ email: email })

        if (existingVandor !== null) {
            // verify Password
            const validation = await validatePassword(password, existingVandor.password, existingVandor.salt)

            if (validation) {
                // generate Signature
                const signature = generateSignature({
                    _id: existingVandor.id,
                    email: existingVandor.email,
                    foodTypes: existingVandor.foodType,
                    name: existingVandor.name
                })
                return res.json({ signature })
            }
            return res.json({
                message: 'Login credentials not valid'
            })

        }
    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }
}

export const getVandorProfile = async (req, res) => {
    try {
        const user = req.user;
        if (user) {

            const existingVandor = await Vandor.findOne({ _id: user._id })
            return res.json(existingVandor)
        }
        return res.json({
            message: 'Vandor information not found'
        })
    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }


}
export const updateVandorProfile = async (req, res) => {
    try {

        const { name, address, phone, foodType } = <updateProfileInter>req.body
        const user = req.user;
        if (user) {

            const existingVandor = await Vandor.findOne({ _id: user._id })

            if (existingVandor !== null) {
                existingVandor.name = name
                existingVandor.address = address
                existingVandor.phone = phone
                existingVandor.foodType = foodType

                const saveResult = await existingVandor.save()

                return res.json({
                    message: 'Vandor information Updated Successfull',
                    data: saveResult
                })
            }
        }
        return res.json({
            message: 'Vandor information not found'
        })

    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }
}

export const updateVandorService = async (req, res) => {
    try {
        const user = req.user;
        if (user) {
            const existingVandor = await Vandor.findOne({ _id: user._id })

            if (existingVandor !== null) {

                existingVandor.serviceAvailable = !existingVandor.serviceAvailable;
                const saveResult = await existingVandor.save()

                return res.json({
                    message: 'Vandor Service Updated Successfull',
                    data: saveResult
                })
            }
        }
        return res.json({
            message: 'Vandor information not found'
        })
    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }


}

export const addFood = async (req, res) => {
    try {
        const user = req.user;
        if (user) {

            const { name, description, category, foodType, readyTime, price } = <createFoodInter>req.body

            const vandor = await Vandor.findOne({ _id: user._id })

            if (vandor !== null) {

                const createFood = await Food.create({
                    vandorId: vandor._id,
                    name: name,
                    description: description,
                    category: category,
                    foodType: foodType,
                    readyTime: readyTime,
                    price: price,
                    images: ['helload']
                })

                // this line pushes newly created food Id into vandor table
                vandor.foods.push(createFood);
                const result = await vandor.save();

                return res.json({
                    message: 'Food created',
                    data: result
                })
            }



        }
        return res.json({
            message: 'Vandor information not found'
        })
    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }
}


export const getFoods = async (req, res) => {
    try {
        const user = req.user;
        if (user) {
            const foods = await Food.find({ vandorId: user._id })
            if (foods !== null) {
                return res.json({
                    message: 'Food Access Successfull',
                    data: foods
                })

            }
            return res.json({
                message: 'No Food available'
            })
        }
    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }
}