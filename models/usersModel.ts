import mongoose from "mongoose"

// 1. interface
export interface IUsersModel extends mongoose.Document{
    name: string,
}

// 2. schema
export const UsersSchema = new mongoose.Schema<IUsersModel>({
    name: {
        type: String,
        required: [true, "Missing name"],
        trim: true
    }
})

// 3. Model
export const UsersModel = mongoose.model<IUsersModel>("UsersModel", UsersSchema, 'users');