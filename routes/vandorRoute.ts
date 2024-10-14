import Express from "express";
import { addCoverImage, addFood, getFoods, getVandorProfile, updateVandorProfile, updateVandorService, vandorLogin } from "../controllers";
import { authenticate } from "../middlewares";
const router = Express.Router();
import multer = require("multer");


const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const images = multer({ storage: imageStorage }).array('images', 10)

//Vandor routes
router.post('/login', vandorLogin)
router.use(authenticate)

router.get('/profile', getVandorProfile)
router.patch('/updateProfile', updateVandorProfile)
router.patch('/service', updateVandorService)
router.post('/addFood', images, addFood)
router.get('/getFoods', getFoods)
router.post('/addCoverImage', images, addCoverImage)





//authenticate middleware can also be used in routes but using authenticate with each route is repetitive 
//router.patch('/updateProfile', authenticate, updateVandorProfile)

export { router as vandorRoute }