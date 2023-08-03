import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import fileUpload from "express-fileupload";
import blockNonLoggedIn from "./utils/blockNonLoggedIn";
import catchAll from "./utils/CatchAll";
import usersController from "./controllers/usersController";
import studentsController from "./controllers/studentsController";
import activitiesController from "./controllers/activitiesController";
import groupsController from "./controllers/groupsController";
import plansController from "./controllers/plansController";
import authController from "./controllers/authController";

import cors from "cors";
import dl from "./utils/dl";

dl.connect();

const server = express();

server.use(cors());
server.use(fileUpload());
server.use(express.json());

// Regular user routes
server.use("/api", authController);
server.use(blockNonLoggedIn)
server.use("/api", plansController);
server.use("/api", studentsController);
server.use("/api", activitiesController);

// Admin-only routes
server.use("/api",  usersController);
server.use("/api", groupsController);


server.get("/", function (req: Request, response: Response) {
  response.send("API 1.0.0");
});

server.use(catchAll);

server.listen("4001", () => console.log("Listening to http://localhost:4001"));

