import { IUsersModel, UsersModel } from "../models/usersModel";
import ValidationError from "../utils/ValidationError";


async function getOneUser( _id: string ):Promise<IUsersModel[]>{
    return UsersModel.find( { _id } );
}

async function getAllUsers():Promise<IUsersModel[]>{
    return UsersModel.find();
    // return UsersModel.find( { age: { $gte: 20 } } );
    // return UsersModel.find( { name: "Naf2" } );
}

async function saveOneUser( user:IUsersModel ):Promise<IUsersModel>{
    const err = user.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newUser = await user.save();
    return newUser;
}

async function updateOneUser( _id: string, user:IUsersModel ):Promise<IUsersModel>{
    const err = user.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newUser = await UsersModel.findByIdAndUpdate( _id, user, { returnOriginal: false } );
    return newUser;
}

async function deleteOneUser( _id: string ):Promise<void>{
    const user = await getOneUser(_id);
    if (!user)
        throw new ValidationError("user not found");

    return await UsersModel.findByIdAndDelete( _id );
}

export default {
    getOneUser,
    saveOneUser,
    getAllUsers,
    updateOneUser,
    deleteOneUser
}