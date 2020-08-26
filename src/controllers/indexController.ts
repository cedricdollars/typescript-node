import { Response, Request } from 'express';
import ApiError from '../base/ErrorException';
import { PrismaClient } from '@prisma/client';

class IndexController {
     

     index(req: Request, res: Response) {
        res.json({
            message: 'Learning typescript'
        })
    }
    
}
export default new IndexController();