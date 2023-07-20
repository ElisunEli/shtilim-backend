import mongoose from "mongoose"

// 1. interface
export interface IActivitiesModel extends mongoose.Document{
    planId: string,
    studentId: string,
    grade: number[],
    createdIn: Date, // not in frontend
    userId: string
}

// 2. schema
export const ActivitiesSchema = new mongoose.Schema<IActivitiesModel>({
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
        type: [Number],
        required: [true, "Missing grade"]
    },
    createdIn: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: String,
        required: [true, "Missing user"],
        trim: true
    },
})

// 3. Model
export const ActivitiesModel = mongoose.model<IActivitiesModel>("ActivitiesModel", ActivitiesSchema, 'activities');
