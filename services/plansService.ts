import { IPlansModel, PlansModel } from "../models/plansModel";
import ValidationError from "../utils/ValidationError";


async function getAllPlans():Promise<IPlansModel[]>{
    return PlansModel.find();
}

async function getPlanById( _id: string ):Promise<IPlansModel>{
    return PlansModel.findById(_id);
}


async function saveOnePlan( plan:IPlansModel ):Promise<IPlansModel>{
    const err = plan.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newPlan = await plan.save();
    return newPlan;
}

async function updateOnePlan( _id: string, plan:IPlansModel ):Promise<IPlansModel>{
    const err = plan.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newPlan = await PlansModel.findByIdAndUpdate( _id, plan, { returnOriginal: false } );
    return newPlan;
}

async function deleteOnePlan( _id: string ):Promise<void>{
    const plan = await getPlanById(_id);
    if (!plan)
        throw new ValidationError("plan not found");

    return await PlansModel.findByIdAndDelete( _id );
}

export default {
    getAllPlans,
    getPlanById,
    saveOnePlan,
    updateOnePlan,
    deleteOnePlan
}
