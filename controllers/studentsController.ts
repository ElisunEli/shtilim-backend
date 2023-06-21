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

router.get("/students/student-by-id/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const student = await studentsService.getStudentById(_id)
        response.json(student);
    } catch (error) {
        next(error);
    }
});

router.get("/students/students-by-group/:group", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const group = req.params.group
        const students = await studentsService.getAllStudentsByGroup(group)
        response.json(students);
    } catch (error) {
        next(error);
    }
});

router.get("/students/students-by-plan/:plan", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const plan = req.params.plan
        const students = await studentsService.getAllStudentsByPlan(plan)
        response.json(students);
    } catch (error) {
        next(error);
    }
});

router.put("/students/update-by-id/:_id", async function (req: Request, response: Response, next: NextFunction) {
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

router.put("/students/add-plan-to-student/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const newPlan:string = req.body.plan;
        const student = await studentsService.addPlanToStudent(_id, newPlan);
        response.json(student);
    } catch (error) {
        next(error);
    }
});

router.put("/students/remove-plan-of-student/:_id", async function (req: Request, response: Response, next: NextFunction) {
    try {
        const _id = req.params._id
        const plan:string = req.body.plan;
        const student = await studentsService.removePlanOfStudent(_id, plan);
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