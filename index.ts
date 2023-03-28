import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";

// import prisma from "./configs/prisma.config";
import { wrappedResponse } from "./utils/functions";
import demoRoute from "./routes/demo.route";
// import { authFactory, AuthSchemes } from "./auth";

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT || "8000");
// const jwtProduct = authFactory(AuthSchemes.JWT);
// const httpProduct = authFactory(AuthSchemes.HTTP);

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { statusCode: 429, message: "Too many requests", result: null },
});

app.use(limiter);
// app.use("/jwt", jwtProduct.router);
// app.use("/http-token", httpProduct.router);

app.use("/hello", demoRoute);

app.use("*", (_: Request, res: Response) => {
  return wrappedResponse(res, "Not Found", 404, null);
});

app.use(function onError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  return wrappedResponse(res, err.message, 500, null);
});

const server = app.listen(port, async () => {
  // await prisma.$connect();
  await mongoose.connect(process.env.DATABASE_URL!);
  console.log(`⚡️[server]: Server is running on PORT ${port}`);
});

process.on("SIGINT", async () => {
  // await prisma.$disconnect();
  await mongoose.disconnect();
  server.close();
  console.log("[server]: Server closed on SIGINT");
});
