import { Schema } from "mongoose";
import { mongoose } from "../config/database";
import studentsSchema from "./StudentsSchema";
import booksSchema from "./BooksSchema";

const borrowSchema = new Schema ({

    lendingDate: {
        type: Date,
        default: Date.now
    },

    returnDate: {
        type: Date,
        default: () => new Date(+new Date() + 5*24*60*60*1000)
    },

    studentName: {
        type: String
    },

    studentCpf: {
        type: String
    },

    booksTitles: [String],

    booksCod: [String]
});

export default mongoose.model("borrow", borrowSchema);