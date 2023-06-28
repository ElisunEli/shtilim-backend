import mongoose from "mongoose"

// 1. interface
export interface IActivitiesModel extends mongoose.Document{
    name: string,
    description: string,
    planId: string,
    studentId: string,
    grade: number[],
    createdIn: Date // not in frontend
}

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
        type: [{ type: Number,
                 min: 0,
                 max: 4 }],
        required: [true, "Missing grade"]
    },
    createdIn: {
        type: Date,
        default: Date.now()
    },
})

// 3. Model
export const ActivitiesModel = mongoose.model<IActivitiesModel>("ActivitiesModel", ActivitiesSchema, 'activities');
