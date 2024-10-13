import Express from "express";
import { authenticate } from "../middlewares";
import { getFoodAvailability, getFoodIn30Min, getTopResturants, resturantById, searchFood } from "../controllers";
const router = Express.Router();



router.get('/:pincode' , getFoodAvailability)

router.get('/top-restaurants/:pincode', getTopResturants)

router.get('/getFoodIn30Min/:pincode', getFoodIn30Min)

router.get('/search/:pincode' , searchFood)

router.get('/restaurant/:id' , resturantById)





export { router as shoppingRoute}