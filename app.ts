import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import catchAll from "./utils/CatchAll";
import usersController from "./controllers/usersController"
import studentsController from "./controllers/studentsController"
import activitiesController from "./controllers/activitiesController"
import groupsController from "./controllers/groupsController"
import plansController from "./controllers/plansController"

import cors from "cors"
import dl from "./utils/dl";
import verifyLoggedIn from "./utils/verify-logged-in";
import { auth } from "firebase-admin";
dl.connect();




const server = express();

server.use(cors());

server.use(express.json());
// server.use("/api", auth);
server.use(verifyLoggedIn)
server.use("/api", usersController);
server.use("/api", studentsController);
server.use("/api", activitiesController);
server.use("/api", groupsController);
server.use("/api", plansController);

server.get("/", function (req: Request, response: Response) {
    response.send("API 1.0.0");
});

server.use(catchAll);

server.listen("4001", () => console.log("Listening to http://localhost:4001"));