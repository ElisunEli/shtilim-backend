import mongoose from "mongoose"

enum Type {
    booleany = "BOOLEAN",
    scalar = "SCALAR",
}

enum ReportingType {
    days = "DAILY",
    hours  = "HOURLY",
    minutes = "MINUTELY"
}

// 1. interface
export interface IPlansModel extends mongoose.Document{
    name: string,
    description: string,
    type: Type,
    gradeDescription: string[],
    reportingTime :number,
    reportingType :ReportingType,
    WhatIsSuccess :number
}

// 2. schema
export const PlansSchema = new mongoose.Schema<IPlansModel>({
    name: {
        type: String,
        required: [true, "Missing first name"],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        required: [true, "Missing type"],
        trim: true
    },
    gradeDescription: {
        type: [],
        trim: true
    },
    reportingTime: {
        type: Number,
        required: [true, "Missing time"]
    },
    reportingType: {
        type: String,
        required: [true, "Missing circulating"]
    }
})

// 3. Model
export const PlansModel = mongoose.model<IPlansModel>("PlansModel", PlansSchema, 'plans');