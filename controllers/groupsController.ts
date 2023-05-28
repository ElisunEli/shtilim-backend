import express, { Request, Response } from "express";
import groupsService from "../services/groupsService";
import { GroupsModel } from "../models/groupsModel";

const router = express.Router();


router.get("/groups", async function( req:Request, response:Response ){
    try {
        const groups = await groupsService.getAllGroups()
        response.json( groups );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.get("/groups/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const group = await groupsService.getOneGroup( _id )
        response.json( group );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.put("/groups/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const newGroup = new GroupsModel( req.body );
        const group = await groupsService.updateOneGroup( _id, newGroup )
        response.json( group );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.delete("/groups/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        await groupsService.deleteOneGroup( _id )
        response.sendStatus(204);
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.post("/groups", async function( req:Request, response:Response ){ 
    try {
        const group = new GroupsModel( req.body );
        const newGroup = await groupsService.saveOneGroup( group );
        response.json( newGroup );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

export default router;
