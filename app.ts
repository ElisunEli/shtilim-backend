import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import usersController from "./controllers/usersController"
import cors from "cors"
import dl from "./utils/dl";

dl.connect();

const server = express();

server.use( cors() );

server.use(express.json());

server.use("/api", usersController );

server.get("/", function( req:Request, response:Response ){
    response.send("API 1.0.0");
});

server.listen("4001", () =>  console.log( "Listening to http://localhost:4001" ) );