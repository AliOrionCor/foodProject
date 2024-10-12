import Express from "express";
import { addFood, getFoods, getVandorProfile, updateVandorProfile, updateVandorService, vandorLogin } from "../controllers";
import { authenticate } from "../middlewares";
const router = Express.Router();




//Vandor routes
router.post('/login', vandorLogin)

// Use this way or authenticated before any route  as mention following routes
//router.use(authenticate)

router.get('/profile', authenticate , getVandorProfile)

router.patch('/updateProfile',authenticate, updateVandorProfile)

router.patch('/service',authenticate, updateVandorService)


router.post('/addFood', authenticate,  addFood)

router.get('/getFoods', authenticate, getFoods)







  

export { router as vandorRoute }