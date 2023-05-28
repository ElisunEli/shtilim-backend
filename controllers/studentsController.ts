import express, { Request, Response } from "express";
import studentsService from "../services/studentsService";
import { StudentsModel } from "../models/studentsModel";

const router = express.Router();


router.get("/students", async function( req:Request, response:Response ){
    try {
        const students = await studentsService.getAllStudents()
        response.json( students );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.get("/students/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const student = await studentsService.getOneStudent( _id )
        response.json( student );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.put("/students/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        const newStudent = new StudentsModel( req.body );
        const student = await studentsService.updateOneStudent( _id, newStudent )
        response.json( student );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.delete("/students/:_id", async function( req:Request, response:Response ){
    try {
        const _id = req.params._id
        await studentsService.deleteOneStudent( _id )
        response.sendStatus(204);
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

router.post("/students", async function( req:Request, response:Response ){ 
    try {
        const student = new StudentsModel( req.body );
        const newStudent = await studentsService.saveOneStudent( student );
        response.json( newStudent );
    } catch (error) { 
        response.status(400).json( error.message );
    }
});

export default router;