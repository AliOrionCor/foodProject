import { authPayload } from "../dto/Auth.dto";
import { Request, Response, NextFunction } from "express";
import { validateSignature } from "../utlity";

declare global {
    namespace Express {
        interface Request {
            user?: authPayload
        }
    }
}


 export const authenticate = async (req: Request, res: Response, next: NextFunction) => {

    const validate = await validateSignature(req)
    if (validate) {
        next()
    }
    else {
        res.status(401).json({ message: 'Unauthorized access' });
        return
    }
}
