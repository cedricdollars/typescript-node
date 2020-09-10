import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from '../config/config';


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = <string>req.headers['x-access-token'];
    let payload;

    if (!token) {
        return res.status(400).send({
            auth: false,
            message: 'Missing token'
        });
    }
    try {
        payload = <any>jwt.verify(token, config.jwtSecret)
        res.locals.payload = payload;
    }
    catch (error) {
        res.status(401).send({
            auth: false,
            message: "No authorized"
        })
    }
    const { userId, username } = payload;
    const userToken = jwt.sign({
        userId,
        username
    }, config.jwtSecret, { expiresIn: "1h" }
    )
    res.setHeader('token', userToken);
    next();
}; 