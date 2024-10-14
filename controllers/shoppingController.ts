import { createVandorInput } from "../dto";
import { foodDoc } from "../models";
import { Vandor } from "../models/vandor";
import { generatePassword, generateSalt } from "../utlity";


export const getFoodAvailability = async (req, res) => {
    try {
        const result = await Vandor.find({ pinCode: req.params.pincode, serviceAvailable: false }).sort([['rating', 'descending']]).populate('foods')

        return res.status(200).json({
            message: 'Data fetch successfull',
            data: result
        })
    }
    catch (err) {

        return res.status(400).json({
            message: err.message
        })

    }
}

export const getTopResturants = async (req, res) => {

    try {
        const result = await Vandor.find({ pinCode: req.params.pincode, serviceAvailable: false }).sort([['rating', 'descending']]).limit(1)

        return res.status(200).json({
            message: 'Data fetch successfull',
            data: result
        })
    }
    catch (err) {

        return res.status(400).json({
            message: err.message
        })

    }

}

export const getFoodIn30Min = async (req, res) => {

    try {
        const result = await Vandor.find({ pinCode: req.params.pincode, serviceAvailable: false }).populate('foods')

        if (result.length > 0) {
            let foodResult = result.flatMap(item =>
                item.foods.filter(food => food.readyTime <= 30)
            );

            return res.status(200).json({
                message: 'Data fetch successfull',
                data: foodResult
            })
        }

    }
    catch (err) {

        return res.status(400).json({
            message: err.message
        })

    }

}

export const searchFood = async (req, res) => {

    try {
        const result = await Vandor.find({ pinCode: req.params.pincode, serviceAvailable: false }).populate('foods')

        if (result.length > 0) {

            const food = result.map(item => item.foods)

            return res.status(200).json({
                message: 'Data fetch successfull',
                data: food
            })
        }

    }
    catch (err) {

        return res.status(400).json({
            message: err.message
        })

    }

}

export const resturantById = async (req, res) => {

    try {
        const result = await Vandor.findById(req.params.id).populate('foods')

        if (result) {

            return res.status(200).json({
                message: 'Data fetch successfull',
                data: result
            })
        }

    }
    catch (err) {

        return res.status(400).json({
            message: err.message
        })

    }

}