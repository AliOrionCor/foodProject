import { createVandorInput } from "../dto";
import { Vandor } from "../models/vandor";

export const createVendor = async (req, res) => {


    const { name, ownerName, address, foodType, pinCode, phone, email, password } = <createVandorInput>req.body;


    const createVandor = await Vandor.create({
        name: name,
        ownerName: ownerName,
        address: address,
        foodType: foodType,
        pinCode: pinCode,
        phone: phone,
        email: email,
        password: password,
        salt:'',
        coverImage:[],
        rating:0,
        serviceAvailable:false,

    })


    return res.json({
        message: 'Vandor created successfull',
        data: createVandor
    })
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