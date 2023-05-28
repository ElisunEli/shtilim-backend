import mongoose from "mongoose"

// 1. interface
export interface IActivitiesModel extends mongoose.Document{
    name: string,
    description: string,
    planId: string,
    studentId: string,
    grade: number}

// 2. schema
export const ActivitiesSchema = new mongoose.Schema<IActivitiesModel>({
    name: {
        type: String,
        required: [true, "Missing first name"],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    planId: {
        type: String,
        required: [true, "Missing plan"],
        trim: true
    },
    studentId: {
        type: String,
        required: [true, "Missing student"],
        trim: true
    },
    grade: {
        type: Number,
        required: [true, "Missing grade"],
        trim: true
    }
})

// 3. Model
export const ActivitiesModel = mongoose.model<IActivitiesModel>("ActivitiesModel", ActivitiesSchema, 'activities');