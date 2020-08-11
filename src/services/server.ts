import express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from "dotenv";
dotenv.config();
import Routes from '../routes/indexRoute';
import ErrorHandler from '../error/error_handler';

const PORT= process.env.PORT
const app = express();

app.use(bodyParser.json());


exports.start = () => {
    app.listen(PORT, (err: Error) => {
        if(err) {
            process.abort();
        }
        console.log(`app running at port ${PORT}`);
    })
}
export default app;