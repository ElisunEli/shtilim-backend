import express, { NextFunction, Request, Response } from "express";
import groupsService from "../services/groupsService";
import { GroupsModel } from "../models/groupsModel";

const router = express.Router();


router.get("/groups", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const groups = await groupsService.getAllGroups()
        response.json(groups);
    } catch (error) {
        next(error);
    }
});

router.get("/groups/group-by-id/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const group = await groupsService.getGroupById(_id)
        if(!group) throw new Error("not group found")
        response.json(group);
    } catch (error) {
        next(error);
    }
});

router.put("/groups/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const newGroup = new GroupsModel(req.body);
        newGroup._id = _id;
        const group = await groupsService.updateOneGroup(_id, newGroup)
        response.json(group);
    } catch (error) {
        next(error);
    }
});

router.delete("/groups/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        await groupsService.deleteOneGroup(_id)
        response.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

router.post("/groups", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const group = new GroupsModel(req.body);
        console.log( group );
        
        const newGroup = await groupsService.saveOneGroup(group);
        console.log( group, "bb" );
        response.json(newGroup);
    } catch (error) {
        next(error);
    }
});

export default router;
