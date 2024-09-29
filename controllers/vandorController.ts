import { createVandorInput, vandorLoginInput } from "../dto";
import { Vandor } from "../models/vandor";
import { validatePassword } from "../utlity";


export const vandorLogin = async (req, res) => {
    try {

        const { email, password } = <vandorLoginInput>req.body
        const existingVandor = await Vandor.findOne({ email: email })

        if (existingVandor !== null) {

            await validatePassword(password, existingVandor.password, existingVandor.salt)

            return res.json({
                message: `${existingVandor.name} Welcome to food order App`
            })
        }

        return res.json({
            message: 'Login credentials not valid'
        })
    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }
}