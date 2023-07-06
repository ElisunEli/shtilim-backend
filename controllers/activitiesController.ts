import express, { NextFunction, Request, Response } from "express";
import activitiesService from "../services/activitiesService";
import { ActivitiesModel } from "../models/activitiesModel";

const router = express.Router();


router.get("/activities", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const activities = await activitiesService.getAllActivities()
        response.json(activities);
    } catch (error) {
        next(error);
    }
});

router.get("/activities/activity-by-id/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const activitie = await activitiesService.getActivitieById(_id)
        response.json(activitie);
    } catch (error) {
        next(error);
    }
});

router.get("/activities/activities-by-plan/:plan", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const plan = req.params.plan
        const activitie = await activitiesService.getAllActivitiesByPlan(plan)
        response.json(activitie);
    } catch (error) {
        next(error);
    }
});

router.get("/activities/activities-by-student/:student", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const student = req.params.student
        console.log(student);
        const activitie = await activitiesService.getAllActivitiesByStudent(student)
        response.json(activitie);
    } catch (error) {
        next(error);
    }
});

router.get("/activities/activities-by-plan-and-student/:plan/:student", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const plan = req.params.plan;
        const student = req.params.student;
        const activities = await activitiesService.getAllActivitiesByPlanAndStudent(plan, student);
        response.json(activities);
    } catch (error) {
        next(error);
    }
});

router.put("/activities/update-by-id/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const newActivitie = new ActivitiesModel(req.body);
        newActivitie._id = _id;
        const activitie = await activitiesService.updateOneActivitie(_id, newActivitie)
        response.json(activitie);
    } catch (error) {
        next(error);
    }
});

router.delete("/activities/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        await activitiesService.deleteOneActivitie(_id)
        response.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

router.post("/activities", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const activitie = new ActivitiesModel(req.body);
        const newActivitie = await activitiesService.saveOneActivitie(activitie);
        response.json(newActivitie);
    } catch (error) {
        next(error);
    }
});

export default router;
