import express from 'express';
const router = express.Router();
import { createVendor,  getVandors, getVandorById } from '../controllers';




// admin routes
router.post('/createVandor', createVendor);

router.get('/getVandors', getVandors)

router.get('/getVandorById/:Id',getVandorById)











export {router as adminRoute}