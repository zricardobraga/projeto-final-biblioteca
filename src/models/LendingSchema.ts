import { model, Schema } from "mongoose";
import { studentsSchema } from "./StudentsSchema";
import booksSchema from "./BooksSchema";

const lendingSchema = new Schema ({
    date: {
        type: Date,
        require: [true, "The field DATE is mandatory"],
    },
    books: [booksSchema],
    students: [studentsSchema],
},
{
    timestamps: true,
}

);

export default model ("lending", lendingSchema);