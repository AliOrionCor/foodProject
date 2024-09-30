import { createVandorInput, vandorLoginInput } from "../dto";
import { Vandor } from "../models/vandor";
import { generatePassword, generateSignature, validatePassword } from "../utlity";


export const vandorLogin = async (req, res) => {
    try {

        const { email, password } = <vandorLoginInput>req.body
        const existingVandor = await Vandor.findOne({ email: email })

        if (existingVandor !== null) {
            const validation = await validatePassword(password, existingVandor.password, existingVandor.salt)

            if (validation) {
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

    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }


}

export const updateVandorService = async (req, res) => {


    try {

    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }


}