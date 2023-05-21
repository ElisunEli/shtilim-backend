import mongoose from "mongoose"

// 1. interface
export interface IStudentsModel extends mongoose.Document{
    firstName: string,
    lastName: string,
    IdNumber: number,
    DateOfBirth: Date,
    Gander: string,
    Address: string,
    createdIn: Date
}

// 2. schema
export const StudentsSchema = new mongoose.Schema<IStudentsModel>({
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
    IdNumber: {
        type: Number,
        required: [true, "Missing id"],
        trim: true
    },
    DateOfBirth: {
        type: Date,
        required: [true, "Missing date of birth"]
    },
    Gander: {
        type: String,
        required: [true, "Missing gander"],
        trim: true
    },
    Address: {
        type: String,
        required: [true, "Missing address"],
        trim: true
    },
    createdIn: {
        type: Date,
        default: Date.now()
    }
})

// 3. Model
export const StudentsModel = mongoose.model<IStudentsModel>("StudentsModel", StudentsSchema, 'students');