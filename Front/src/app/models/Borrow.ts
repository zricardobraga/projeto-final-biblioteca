import { Book} from './Book';
import { Student } from './Student';

export class Borrow {
    _id?: string;
    borrowDate!: Date;
    returnDate!: Date;
    studentBorrow!: Student;
    borrowBooks!: Book[];
    
}