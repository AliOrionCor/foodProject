import Express from "express";
import { getVandorProfile, updateVandorProfile, updateVandorService, vandorLogin } from "../controllers";
import { authenticate } from "../middlewares";
const router = Express.Router();




//Vandor routes
router.post('/login', vandorLogin)

router.get('/profile', authenticate , getVandorProfile)

router.patch('/profile', updateVandorProfile)

router.patch('/service', updateVandorService)










  

export { router as vandorRoute }