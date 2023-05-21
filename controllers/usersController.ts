import express, { Request, Response } from "express";
import usersService from "../services/usersService";
import { UsersModel } from "../models/usersModel";

const router = express.Router();


router.get("/users", async function( req:Request, response:Response ){
    try {
        const users = await usersService.getAllUsers()
        response.json( users );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.get("/users/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const user = await usersService.getOneUser( _id )
        response.json( user );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.post("/users", async function( req:Request, response:Response ){ 
    try {
        const user = new UsersModel( req.body );
        const newUser = await usersService.saveOneUser( user );
        response.json( newUser );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

export default router;