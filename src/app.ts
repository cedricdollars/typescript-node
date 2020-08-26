import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/indexRouter';
import path from 'path';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    /**
    * Configuration application
    */
    private config():void {

        
        this.app
        .use('*', cors())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: false }))
        .set("views", path.join(__dirname, "views"))
        .set("view engine", "ejs");

        //add routes
        this.app.use('/api/v1', routes);
    }
    
}

export default new App().app;

