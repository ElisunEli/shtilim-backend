import { IPlansModel, PlansModel } from "../models/plansModel";


async function getAllPlans():Promise<IPlansModel[]>{
    return PlansModel.find();
}

async function getOnePlan( _id: string ):Promise<IPlansModel[]>{
    return PlansModel.find( { _id } );
}

async function saveOnePlan( plan:IPlansModel ):Promise<IPlansModel>{
    const newPlan = await plan.save();
    return newPlan;
}

async function updateOnePlan( _id: string, plan:IPlansModel ):Promise<IPlansModel>{
    const newPlan = await PlansModel.findByIdAndUpdate( _id, plan, { returnOriginal: false } );
    return newPlan;
}

async function deleteOnePlan( _id: string ):Promise<void>{
    return await PlansModel.findByIdAndDelete( _id );
}

export default {
    getAllPlans,
    getOnePlan,
    saveOnePlan,
    updateOnePlan,
    deleteOnePlan
}
