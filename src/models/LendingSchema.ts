import { Schema } from "mongoose";
import { mongoose } from "../config/database";
import studentsSchema from "./StudentsSchema";
import booksSchema from "./BooksSchema";

const lendingSchema = new Schema ({

    lendingDate: {
        type: Date,
        default: Date.now
    },

    returnDate: {
        type: Date,
        default: "cincos dias após a data"
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

export default mongoose.model("lending", lendingSchema);