import mongoose from "mongoose"

enum Role {
    admin = "ADMIN",
    user = "USER"
}

// 1. interface
export interface IUsersModel extends mongoose.Document{
    firstName: string,
    lastName: string,
    email: string,
    active: boolean,
    role: Role
}

// 2. schema
export const UsersSchema = new mongoose.Schema<IUsersModel>({
    firstName: {
        type: String,
        required: [true, "Missing first name"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Missing last name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Missing mail"],
        trim: true
    },
    active: {
        type: Boolean,
        required: [true, "Missing activation"]
    },
    role: {
        type: String,
        required: [true, "Missing role"]
    }
})

// 3. Model
export const UsersModel = mongoose.model<IUsersModel>("UsersModel", UsersSchema, 'users');