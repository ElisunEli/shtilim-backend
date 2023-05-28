import { IActivitiesModel, ActivitiesModel } from "../models/activitiesModel";


async function getAllActivities():Promise<IActivitiesModel[]>{
    return ActivitiesModel.find();
}

async function getOneActivitie( _id: string ):Promise<IActivitiesModel[]>{
    return ActivitiesModel.find( { _id } );
}

async function saveOneActivitie( activitie:IActivitiesModel ):Promise<IActivitiesModel>{
    const newActivitie = await activitie.save();
    return newActivitie;
}

async function updateOneActivitie( _id: string, activitie:IActivitiesModel ):Promise<IActivitiesModel>{
    const newActivitie = await ActivitiesModel.findByIdAndUpdate( _id, activitie, { returnOriginal: false } );
    return newActivitie;
}

async function deleteOneActivitie( _id: string ):Promise<void>{
    return await ActivitiesModel.findByIdAndDelete( _id );
}

export default {
    getAllActivities,
    getOneActivitie,
    saveOneActivitie,
    updateOneActivitie,
    deleteOneActivitie
}
