import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import apiRoutes from "./routes/indexRouter";
import path from "path";
import { NextFunction, Request, Response } from "express";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  /**
   * Configuration application
   */
  private config(): void {
    this.app
      .use("*", cors())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: false }))
      .set("views", path.join(__dirname, "views"))
      .set("view engine", "ejs")

      //handling errors
      .use((req: Request, res: Response, next: NextFunction) => {
        const error = new Error("NOT FOUND");
        res.statusCode = 404;
        next(error);
      })
      .use((error: any, req: Request, res: Response, next: NextFunction) => {
        res.status(error.status || 500);
        res.send({
          Error: {
            status: error.status || 500,
            message: error.message,
          },
        });
      });

    //add routes
    this.app.use("/api/v1", apiRoutes);
  }
}

export default new App().app;
