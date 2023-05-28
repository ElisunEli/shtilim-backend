import express, { Request, Response } from "express";
import plansService from "../services/plansService";
import { PlansModel } from "../models/plansModel";

const router = express.Router();


router.get("/plans", async function( req:Request, response:Response ){
    try {
        const plans = await plansService.getAllPlans()
        response.json( plans );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.get("/plans/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const plan = await plansService.getOnePlan( _id )
        response.json( plan );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.put("/plans/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const newPlan = new PlansModel( req.body );
        const plan = await plansService.updateOnePlan( _id, newPlan )
        response.json( plan );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.delete("/plans/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        await plansService.deleteOnePlan( _id )
        response.sendStatus(204);
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.post("/plans", async function( req:Request, response:Response ){ 
    try {
        const plan = new PlansModel( req.body );
        const newPlan = await plansService.saveOnePlan( plan );
        response.json( newPlan );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

export default router;
