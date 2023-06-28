import { IGroupsModel, GroupsModel } from "../models/groupsModel";
import ValidationError from "../utils/ValidationError";


async function getAllGroups():Promise<IGroupsModel[]>{
    return GroupsModel.find();
}

async function getGroupById( _id: string ):Promise<IGroupsModel>{
    return GroupsModel.findById(_id);
}

async function saveOneGroup( group:IGroupsModel ):Promise<IGroupsModel>{
    const err = group.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newGroup = await group.save();
    return newGroup;
}

async function updateOneGroup( _id: string, group:IGroupsModel ):Promise<IGroupsModel>{
    const err = group.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newGroup = await GroupsModel.findByIdAndUpdate( _id, group, { returnOriginal: false } );
    return newGroup;
}

async function deleteOneGroup( _id: string ):Promise<void>{
    const group = await getGroupById(_id);
    if (!group)
        throw new ValidationError("group not found");

    return await GroupsModel.findByIdAndDelete( _id );
}

export default {
    getAllGroups,
    getGroupById,
    saveOneGroup,
    updateOneGroup,
    deleteOneGroup
}
