import express, { Request, Response } from "express";
import activitiesService from "../services/activitiesService";
import { ActivitiesModel } from "../models/activitiesModel";

const router = express.Router();


router.get("/activities", async function( req:Request, response:Response ){
    try {
        const activities = await activitiesService.getAllActivities()
        response.json( activities );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.get("/activities/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const activitie = await activitiesService.getOneActivitie( _id )
        response.json( activitie );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.put("/activities/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const newActivitie = new ActivitiesModel( req.body );
        const activitie = await activitiesService.updateOneActivitie( _id, newActivitie )
        response.json( activitie );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.delete("/activities/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        await activitiesService.deleteOneActivitie( _id )
        response.sendStatus(204);
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.post("/activities", async function( req:Request, response:Response ){ 
    try {
        const activitie = new ActivitiesModel( req.body );
        const newActivitie = await activitiesService.saveOneActivitie( activitie );
        response.json( newActivitie );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

export default router;
