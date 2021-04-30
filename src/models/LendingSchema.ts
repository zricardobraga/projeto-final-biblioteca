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
<<<<<<< HEAD
        default: "cincos dias após a data"
=======
        default: () => new Date(+new Date() + 5*24*60*60*1000)
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
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