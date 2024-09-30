import Express from "express";
import { vandorLogin } from "../controllers";
const router = Express.Router();




//Vandor routes
router.post('/login', vandorLogin)
router.get('/profile')
router.patch('/profile')
router.patch('/service')












export { router as vandorRoute }