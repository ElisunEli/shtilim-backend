import express, { NextFunction, Request, Response } from "express";
import usersService from "../services/usersService";
import { UsersModel } from "../models/usersModel";

const router = express.Router();


router.get("/users", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const users = await usersService.getAllUsers()
        response.json(users);
    } catch (error) {
        next(error);
    }
});

router.get("/users/user-by-email/:email", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const email = req.params.email;
                console.log(email);
const user = await usersService.getUserByEmail(email);
        response.json(user);
    } catch (error) {
        next(error);
    }
});

router.get("/users/user-by-id/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const user = await usersService.getUserById(_id)
        response.json(user);
    } catch (error) {
        next(error);
    }
});

router.put("/users/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const newUser = new UsersModel(req.body);
        newUser._id = _id;
        const user = await usersService.updateOneUser(_id, newUser)
        response.json(user);
    } catch (error) {
        next(error);
    }
});

router.delete("/users/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        await usersService.deleteOneUser(_id)
        response.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

router.post("/users", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const user = new UsersModel(req.body);
        const newUser = await usersService.saveOneUser(user);
        response.json(newUser);
    } catch (error) {
        next(error);
    }
});

export default router;