import express from 'express';
const router = express.Router();
import { createVendor, getVandor, getVandorById } from '../controllers';




// admin routes
router.post('/createVandor', createVendor);

router.get('/getVandor', getVandor)

router.get('/getVandorById/:Id',getVandorById)









export {router as adminRoute}