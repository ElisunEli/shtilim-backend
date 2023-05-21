import mongoose from "mongoose"

// 1. interface
export interface IUsersModel extends mongoose.Document{
    // _id
    name: string,
    age: number
}

// 2. schema
export const UsersSchema = new mongoose.Schema<IUsersModel>({
    name: {
        type: String,
        required: [true, "Missing name"],
        trim: true
    },
    age: {
        type: Number,
        required: [true, "Missing age"],
        min: [18, "Age must..."]
    }
})

// 3. Model
export const UsersModel = mongoose.model<IUsersModel>("UsersModel", UsersSchema, 'users');