import {model, Schema} from mongoose;
import {studensSchema} from './StudentsSchema';
import {booksSchema} from './BooksSchema';

const lendingSchema = new Schema ({
    date: {
        type: Date,
        require: [true, "O campo Data é obrigatório"],
    },
    books: [booksSchema],
    students: [studensSchema],
},
{
    timestamps: true,
}

);

export default model ("lending", lendingSchema);