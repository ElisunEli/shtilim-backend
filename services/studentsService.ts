import { IStudentsModel, StudentsModel } from "../models/studentsModel";
import ValidationError from "../utils/ValidationError";


async function getAllStudents(): Promise<IStudentsModel[]> {
    return StudentsModel.find();
}

async function getAllStudentsByGroup(group: string):Promise<IStudentsModel[]>{
    return StudentsModel.find({group});
}

async function getAllStudentsByPlan(plan: string): Promise<IStudentsModel[]> {
    return StudentsModel.find({ plans: plan }).exec();
}

async function getStudentById(_id: string): Promise<IStudentsModel> {
    return StudentsModel.findById(_id);
}

async function addPlanToStudent(_id: string, plan: string): Promise<IStudentsModel>{
    const student = await getStudentById(_id);
    student.plans.push(plan);
    return await updateOneStudent(_id, student);
}

async function removePlanOfStudent(_id: string, plan: string):Promise<IStudentsModel>{
    const student = await getStudentById(_id);
    const planIndex = student.plans.indexOf(plan);
    
    if (planIndex === -1) {
        throw new ValidationError("Plan not found in student's plans");}
        
    student.plans.splice(planIndex, 1);
    return await updateOneStudent(_id, student);
}

async function saveOneStudent(student: IStudentsModel): Promise<IStudentsModel> {
    const err = student.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newStudent = await student.save();
    return newStudent;
}

async function updateOneStudent(_id: string, student: IStudentsModel): Promise<IStudentsModel> {
    const err = student.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newStudent = await StudentsModel.findByIdAndUpdate(_id, student, { returnOriginal: false });
    return newStudent;
}

async function deleteOneStudent(_id: string): Promise<void> {
    const student = await getStudentById(_id);
    if (!student)
        throw new ValidationError("student not found");

    return await StudentsModel.findByIdAndDelete(_id);
}

export default {
    getAllStudents,
    getAllStudentsByGroup,
    getAllStudentsByPlan,
    getStudentById,
    addPlanToStudent,
    removePlanOfStudent,
    saveOneStudent,
    updateOneStudent,
    deleteOneStudent
}
