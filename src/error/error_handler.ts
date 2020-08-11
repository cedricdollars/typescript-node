import  ApiError  from './api_error';
import { NextFunction } from 'express';

const ErrorHandler = (err: any, req: any, res: any, next: NextFunction) => {
    
    if( err instanceof ApiError) {
        res.status(err.code).json(err.message);
        return;
    }
    
    res.status(500).json('Something went wrong')
}
export default ErrorHandler;