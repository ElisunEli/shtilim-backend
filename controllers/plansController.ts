import express, { NextFunction, Request, Response } from "express";
import plansService from "../services/plansService";
import { PlansModel } from "../models/plansModel";

const router = express.Router();


router.get("/plans", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const plans = await plansService.getAllPlans()
        response.json(plans);
    } catch (error) {
        next(error);
    }
});

router.get("/plans/plan-by-id/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const plan = await plansService.getPlanById(_id)
        response.json(plan);
    } catch (error) {
        next(error);
    }
});

router.put("/plans/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const newPlan = new PlansModel(req.body);
        newPlan._id = _id;
        const plan = await plansService.updateOnePlan(_id, newPlan)
        response.json(plan);
    } catch (error) {
        next(error);
    }
});

router.delete("/plans/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        await plansService.deleteOnePlan(_id)
        response.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

router.post("/plans", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const plan = new PlansModel(req.body);
        console.log(plan)
        const newPlan = await plansService.saveOnePlan(plan);
        response.json(newPlan);
    } catch (error) {
        next(error);
    }
});

export default router;
