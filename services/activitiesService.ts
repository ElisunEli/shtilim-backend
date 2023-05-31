import { IActivitiesModel, ActivitiesModel } from "../models/activitiesModel";
import ValidationError from "../utils/ValidationError";


async function getAllActivities():Promise<IActivitiesModel[]>{
    return ActivitiesModel.find();
}

async function getOneActivitie( _id: string ):Promise<IActivitiesModel[]>{
    return ActivitiesModel.find( { _id } );
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
    const activity = await getOneActivitie(_id);
    if (!activity)
        throw new ValidationError("activity not found");

    return await ActivitiesModel.findByIdAndDelete( _id );
}

export default {
    getAllActivities,
    getOneActivitie,
    saveOneActivitie,
    updateOneActivitie,
    deleteOneActivitie
}
