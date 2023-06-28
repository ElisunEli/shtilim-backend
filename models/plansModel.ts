import mongoose from "mongoose"

enum Type {
    booleany = "תוכנית לפי הצלחה או לא",
    scalar = "תוכנית לפי דירוג הצלחה"
}

enum ReportingType {
    days = "יומי",
    hours = "שעתי",
    minutes = "דקתי"
}

class QuizModel {
    title: string = "";
    type: Type = Type.booleany;
    answer: string[] = [];
}

// 1. interface
export interface IPlansModel extends mongoose.Document{
    name: string,
    description: string,
    reportingTime: number,
    reportingType: ReportingType,
    quiz: QuizModel[]
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
    reportingTime: {
        type: Number,
        required: [true, "Missing time"],
    },
    reportingType: {
        type: String,
        required: [true, "Missing circulating"],
        enum: Object.values(ReportingType)
    },
    quiz: {
        type: [
            {
                title: {
                    type: String,
                    required: [true, "Missing title"],
                    trim: true
                },
                type: {
                    type: String,
                    required: [true, "Missing type"],
                    enum: Object.values(Type)
                },
                answer: {
                    type: [String],
                    required: [true, "Missing answer"]
                }
            }
        ],
        required: [true, "Missing quiz"]
    }
})

// 3. Model
export const PlansModel = mongoose.model<IPlansModel>("PlansModel", PlansSchema, 'plans');