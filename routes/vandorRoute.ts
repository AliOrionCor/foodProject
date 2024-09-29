import Express from "express";
import { vandorLogin } from "../controllers";
const router = Express.Router();




// Vandor routes
router.post('/login', vandorLogin)












export { router as vandorRoute }