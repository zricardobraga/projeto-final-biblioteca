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
    
    studentBorrow:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        require: true
    },

    booksBorrow:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        require: true
    }],

});

export default mongoose.model("borrow", borrowSchema);