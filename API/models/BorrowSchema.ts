import { Schema } from "mongoose";
import { mongoose } from "../config/database";

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
        type: Schema.Types.ObjectId,
        ref: 'Student',
        require: true
    },

    booksBorrow:{
        type: Schema.Types.ObjectId,
        ref: 'Book',
        require: true
    },

});

export default mongoose.model("borrow", borrowSchema);