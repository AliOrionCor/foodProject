import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { vandorPayload } from '../dto';
import { APP_SECRET_KEY } from '../config/config';
import { isJsxFragment } from 'typescript';
import { authPayload } from '../dto/Auth.dto';
import { Request } from 'express';


export const generateSalt = async () => {
    return bcrypt.genSalt();
}

export const generatePassword = async (password: string, salt: string) => {
    return await bcrypt.hash(password, salt)

}

export const validatePassword = async (enteredPassword: string, savedPassword: string, salt: string) => {
    return await generatePassword(enteredPassword, salt) === savedPassword;
}


export const generateSignature = (payload: vandorPayload) => {
    const signature = jwt.sign(payload, APP_SECRET_KEY, { expiresIn: '50m' });
    return signature;
}


export const validateSignature = async (req: Request) => {
    const signature = req.get('Authorization');
    if (signature) {

        const payload = await jwt.verify(signature.split(' ')[1], APP_SECRET_KEY) as authPayload

        if (!payload) {
            return false
        }

        req.user = payload;

        return true
    }
    return false;
}