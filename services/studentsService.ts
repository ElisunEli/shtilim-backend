import { IStudentsModel, StudentsModel } from "../models/studentsModel";
import ValidationError from "../utils/ValidationError";


async function getAllStudents():Promise<IStudentsModel[]>{
    return StudentsModel.find();
    // return UsersModel.find( { age: { $gte: 20 } } );
    // return UsersModel.find( { name: "Naf2" } );
}

async function getOneStudent( _id: string ):Promise<IStudentsModel[]>{
    return StudentsModel.find( { _id } );
}

async function saveOneStudent( student:IStudentsModel ):Promise<IStudentsModel>{
    const err = student.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newStudent = await student.save();
    return newStudent;
}

async function updateOneStudent( _id: string, student:IStudentsModel ):Promise<IStudentsModel>{
    const err = student.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newStudent = await StudentsModel.findByIdAndUpdate( _id, student, { returnOriginal: false } );
    return newStudent;
}

async function deleteOneStudent( _id: string ):Promise<void>{
    const student = await getOneStudent(_id);
    if (!student)
        throw new ValidationError("student not found");

    return await StudentsModel.findByIdAndDelete( _id );
}

export default {
    getAllStudents,
    getOneStudent,
    saveOneStudent,
    updateOneStudent,
    deleteOneStudent
}
