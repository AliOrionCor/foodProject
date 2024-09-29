import { createVandorInput } from "../dto";
import { Vandor } from "../models/vandor";

export const createVendor = async (req, res) => {

    console.log('hello')

    const { name, ownerName, address, foodType, pinCode, phone, email, password } = <createVandorInput>req.body;
    try {
        const createVandor = await Vandor.create({
            name: name,
            ownerName: ownerName,
            address: address,
            foodType: foodType,
            pinCode: pinCode,
            phone: phone,
            email: email,
            password: password,
            salt: '123213',
            coverImage: [],
            rating: 0,
            serviceAvailable: false,

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

export const getVandor = async (req, res) => {



    return res.json({
        message: 'Get successfull'
    })
}

export const getVandorById = async (req, res) => {


    return res.json({
        message: 'Get by Id successfull'
    })

}