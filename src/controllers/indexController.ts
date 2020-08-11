import { Response, Request } from 'express';
import ApiError from '../error/api_error';
import { PrismaClient } from '@prisma/client';

class IndexController {
     

     index(req: Request, res: Response) {
        res.json({
            message: 'Learning typescript'
        })
    }
    
}
export default new IndexController();