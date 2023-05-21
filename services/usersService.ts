import { IUsersModel, UsersModel } from "../models/usersModel";


async function getOneUser( _id: string ):Promise<IUsersModel[]>{
    return UsersModel.find( { _id } );
}

async function getAllUsers():Promise<IUsersModel[]>{
    return UsersModel.find();
    // return UsersModel.find( { age: { $gte: 20 } } );
    // return UsersModel.find( { name: "Naf2" } );
}

async function saveOneUser( user:IUsersModel ):Promise<IUsersModel>{
    const newUser = await user.save();
    return newUser;
}

export default {
    getOneUser,
    saveOneUser,
    getAllUsers
}