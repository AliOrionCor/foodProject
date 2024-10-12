import { createVandorInput } from "../dto";
import { Vandor } from "../models/vandor";
import { generatePassword, generateSalt } from "../utlity";

export const createVendor = async (req, res) => {
    try {
        const { name, ownerName, address, foodType, pinCode, phone, email, password } = <createVandorInput>req.body;

        const exist = await Vandor.findOne({ email: email })
        if (exist !== null) {
            return res.json({
                message: 'Vandor already Exists'
            })
        }

        const salt = await generateSalt();
        const userPassword = await generatePassword(password, salt);

        const createVandor = await Vandor.create({
            name: name,
            ownerName: ownerName,
            address: address,
            foodType: foodType,
            pinCode: pinCode,
            phone: phone,
            email: email,
            password: userPassword,
            salt: salt,
            coverImage: [],
            rating: 0,
            serviceAvailable: false,
            foods:[]

        })

        return res.json({
            message: 'Vandor created successfull',
            data: createVandor
        })

    } catch (error) {
        return res.json({
            message: error.message
        })

    }
};

export const getVandors = async (req, res) => {
    try {
        const VandorList = await Vandor.find({})

        if (VandorList !== null) {
            return res.json({
                message: 'Get successfull',
                data: VandorList
            })
        }

        return res.json({
            message: 'No Vandors available'
        })
    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }
}

export const getVandorById = async (req, res) => {
    try {
        const vandorById = await Vandor.findById({ _id: req.params.Id })

        console.log(vandorById)
        if (vandorById !== null) {
            return res.json({
                message: 'Get by Id successfull',
                data: vandorById
            })
        }
        return res.json({
            message: 'No Vandor available'
        })

    }
    catch (error) {
        return res.json({
            message: error.message
        })
    }
}

