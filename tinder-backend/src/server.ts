import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import Cors from "cors";

import express, { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes";
import "express-async-errors";

import logger from "./shared/Logger";
import Users from "./routes/users/user_routes";
import cardRouter from "./routes/card";

const app = express();
const { BAD_REQUEST } = StatusCodes;

app.use(express.json());
app.use(Cors())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(Users);
app.use(cardRouter)
// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

export default app;
