import express, { NextFunction, Request, Response } from "express";
import studentsService from "../services/studentsService";
import { StudentsModel } from "../models/studentsModel";

const router = express.Router();


router.get("/students", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const students = await studentsService.getAllStudents()
        response.json(students);
    } catch (error) {
        next(error);
    }
});

router.get("/students/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const student = await studentsService.getOneStudent(_id)
        response.json(student);
    } catch (error) {
        next(error);
    }
});

router.put("/students/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const newStudent = new StudentsModel(req.body);
        newStudent._id = _id;
        const student = await studentsService.updateOneStudent(_id, newStudent)
        response.json(student);
    } catch (error) {
        next(error);
    }
});

router.delete("/students/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        await studentsService.deleteOneStudent(_id)
        response.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

router.post("/students", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const student = new StudentsModel(req.body);
        const newStudent = await studentsService.saveOneStudent(student);
        response.json(newStudent);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default router;