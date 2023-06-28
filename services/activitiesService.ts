import { IActivitiesModel, ActivitiesModel } from "../models/activitiesModel";
import ValidationError from "../utils/ValidationError";


async function getAllActivities():Promise<IActivitiesModel[]>{
    return ActivitiesModel.find();
}

async function getActivitieById( _id: string ):Promise<IActivitiesModel>{
    return ActivitiesModel.findById(_id);
}

async function getAllActivitiesByPlan(planId: string):Promise<IActivitiesModel[]>{
    return ActivitiesModel.find({ planId });
}

async function getAllActivitiesByStudent(studentId: string):Promise<IActivitiesModel[]>{
    return ActivitiesModel.find({ studentId });
}

async function getAllActivitiesByPlanAndStudent(planId: string, studentId: string): Promise<IActivitiesModel[]> {
    return ActivitiesModel.find({ planId, studentId });
}

async function saveOneActivitie( activitie:IActivitiesModel ):Promise<IActivitiesModel>{
    const err = activitie.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newActivitie = await activitie.save();
    return newActivitie;
}

async function updateOneActivitie( _id: string, activitie:IActivitiesModel ):Promise<IActivitiesModel>{
    const err = activitie.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newActivitie = await ActivitiesModel.findByIdAndUpdate( _id, activitie, { returnOriginal: false } );
    return newActivitie;
}

async function deleteOneActivitie( _id: string ):Promise<void>{
    const activity = await getActivitieById(_id);
    if (!activity)
        throw new ValidationError("activity not found");

    return await ActivitiesModel.findByIdAndDelete( _id );
}

export default {
    getAllActivities,
    getAllActivitiesByPlan,
    getAllActivitiesByStudent,
    getAllActivitiesByPlanAndStudent,
    getActivitieById,
    saveOneActivitie,
    updateOneActivitie,
    deleteOneActivitie
}
