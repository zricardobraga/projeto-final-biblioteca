import { Schema } from "mongoose";
import { mongoose } from "../config/database";
import studentsSchema from "./StudentsSchema";
import booksSchema from "./BooksSchema";

const borrowSchema = new Schema ({

    borrowDate: {
        type: Date,
        default: Date.now
    },

    returnDate: {
        type: Date,
        default: () => new Date(+new Date() + 5*24*60*60*1000)
    },

    // studentName: {
    //     type: String
    // },

    // studentCpf: {
    //     type: String
    // },

    // booksTitles: [String],

    // booksCod: [String]
    
    studentBorrow:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StudentsSchema',
        require: true
    },

    booksBorrow:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BooksSchema',
        require: true
    },

});

export default mongoose.model("borrow", borrowSchema);