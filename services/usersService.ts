import { IUsersModel, UsersModel } from "../models/usersModel";
import ValidationError from "../utils/ValidationError";


async function getUserById(_id: string): Promise<IUsersModel[]> {
    console.log("now: " + _id)
    return UsersModel.find({ _id });
}

async function getAllUsers(): Promise<IUsersModel[]> {
    return UsersModel.find();
}

async function getUserByEmail(email: string): Promise<IUsersModel[]> {
    return UsersModel.find({ email });
}

async function saveOneUser(user: IUsersModel): Promise<IUsersModel> {
    const err = user.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newUser = await user.save();
    return newUser;
}

async function updateOneUser(_id: string, user: IUsersModel): Promise<IUsersModel> {
    const err = user.validateSync();
    if (err)
        throw new ValidationError(err.message);
    const newUser = await UsersModel.findByIdAndUpdate(_id, user, { returnOriginal: false });
    return newUser;
}

async function deleteOneUser(_id: string): Promise<void> {
    const user = await getUserById(_id);
    if (!user)
        throw new ValidationError("user not found");

    return await UsersModel.findByIdAndDelete(_id);
}

export default {
    getUserById,
    saveOneUser,
    getAllUsers,
    getUserByEmail,
    updateOneUser,
    deleteOneUser
}