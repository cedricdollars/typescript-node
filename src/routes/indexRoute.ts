import express, { Response, Request, Application } from 'express';
import  IndexController  from '../controllers/indexController';

// const indexRouter = express.Router();

// /**
//  * Routes definition 
//  */
// const indexController: IndexController = new IndexController();
//  // GET an id
// indexRouter.route('/').get(indexController.index)
class Routes {
    
    initRoute(app: Application) :void {
        app.route('/').get(IndexController.index);
    }
}

export default new Routes();