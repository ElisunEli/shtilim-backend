import { IGroupsModel, GroupsModel } from "../models/groupsModel";


async function getAllGroups():Promise<IGroupsModel[]>{
    return GroupsModel.find();
}

async function getOneGroup( _id: string ):Promise<IGroupsModel[]>{
    return GroupsModel.find( { _id } );
}

async function saveOneGroup( group:IGroupsModel ):Promise<IGroupsModel>{
    const newGroup = await group.save();
    return newGroup;
}

async function updateOneGroup( _id: string, group:IGroupsModel ):Promise<IGroupsModel>{
    const newGroup = await GroupsModel.findByIdAndUpdate( _id, group, { returnOriginal: false } );
    return newGroup;
}

async function deleteOneGroup( _id: string ):Promise<void>{
    return await GroupsModel.findByIdAndDelete( _id );
}

export default {
    getAllGroups,
    getOneGroup,
    saveOneGroup,
    updateOneGroup,
    deleteOneGroup
}
